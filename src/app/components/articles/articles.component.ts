import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ArticleState } from '../../store/articles/articles.reducer';
import { Observable, Subscription } from 'rxjs';
import { loadArticles } from '../../store/articles/articles.actions';
import { KeywordsState } from '../../store/keywords/keywords.reducer';
import { IArticle } from '../../types/IArticle';

@Component({
	selector: 'app-articles',
	templateUrl: './articles.component.html',
	styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit, OnDestroy {
	constructor(private store: Store<{ articles: ArticleState; keywords: KeywordsState }>) {}

	loading$: Observable<boolean>;
	error$: Observable<any>;
	keywordsSubscription$: Subscription;
	articlesSubscription$: Subscription;
	articles: IArticle[];
	filteredArticles: IArticle[];

	filterArticle(keywords: string): void {
		if (!keywords.length) {
			this.filteredArticles = this.articles;
		} else {
			const keywordsArr = keywords.split(' ').filter(keyword => keyword.trim() !== '');

			this.filteredArticles = this.articles.filter(article =>
				keywordsArr.some(
					keyword => article.title.includes(keyword) || article.summary.includes(keyword),
				),
			);
		}
	}

	ngOnInit() {
		this.store.dispatch(loadArticles());
		this.loading$ = this.store.pipe(select('articles', 'loading'));
		this.error$ = this.store.pipe(select('articles', 'error'));

		this.articlesSubscription$ = this.store
			.pipe(select('articles', 'articles'))
			.subscribe(articlesResponse => {
				this.articles = articlesResponse?.results || [];
				this.filteredArticles = articlesResponse?.results || [];
			});

		this.keywordsSubscription$ = this.store
			.pipe(select('keywords', 'keywords'))
			.subscribe(keywords => {
				this.filterArticle(keywords);
			});
	}

	ngOnDestroy() {
		this.articlesSubscription$.unsubscribe();
		this.keywordsSubscription$.unsubscribe();
	}
}
