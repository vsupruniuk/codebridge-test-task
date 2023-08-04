import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from '../../types/IArticle';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectKeywordsValue } from '../../store/keywords/keywords.selectors';

@Component({
	selector: 'app-article-card',
	templateUrl: './article-card.component.html',
	styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit {
	constructor(private store: Store) {}

	@Input({ required: true }) article: IArticle;

	keywords$: Observable<string>;

	ngOnInit() {
		this.keywords$ = this.store.select(selectKeywordsValue);
	}
}
