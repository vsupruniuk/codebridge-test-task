import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticle } from '../../types/IArticle';

@Component({
	selector: 'app-articles-list',
	templateUrl: './articles-list.component.html',
	styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent {
	@Input({ required: true }) articles: IArticle[];
	@Input({ required: true }) loading$: Observable<boolean>;
	@Input({ required: true }) error$: Observable<any>;
	protected readonly Boolean = Boolean;
}
