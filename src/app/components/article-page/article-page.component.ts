import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ArticleState } from '../../store/articles/articles.reducer';
import { Observable } from 'rxjs';
import { IArticle } from '../../types/IArticle';
import { ActivatedRoute } from '@angular/router';
import { loadArticleById } from '../../store/articles/articles.actions';

@Component({
	selector: 'app-article-page',
	templateUrl: './article-page.component.html',
	styleUrls: ['./article-page.component.scss'],
})
export class ArticlePageComponent implements OnInit {
	constructor(
		private store: Store<{ articles: ArticleState }>,
		private route: ActivatedRoute,
	) {}

	article$: Observable<IArticle | null>;
	loading$: Observable<boolean>;
	error$: Observable<any>;

	ngOnInit() {
		const id = this.route.snapshot.paramMap.get('id');

		this.store.dispatch(loadArticleById({ id: String(id) }));
		this.article$ = this.store.pipe(select('articles', 'article'));
		this.loading$ = this.store.pipe(select('articles', 'loading'));
		this.error$ = this.store.pipe(select('articles', 'error'));
	}

	protected readonly Boolean = Boolean;
}
