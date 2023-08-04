import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticle } from '../../types/IArticle';
import { Breakpoints } from '../../types/Breakpoints';

@Component({
	selector: 'app-articles-list',
	templateUrl: './articles-list.component.html',
	styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit {
	@Input({ required: true }) articles: IArticle[];
	@Input({ required: true }) loading$: Observable<boolean>;
	@Input({ required: true }) error$: Observable<any>;

	protected readonly Boolean = Boolean;

	gridColumns: number;

	onResize(event: Event) {
		const window = event.target as Window;

		this.gridColumns =
			window.innerWidth < Breakpoints.TABLET ? 1 : window.innerWidth < Breakpoints.LAPTOP ? 2 : 3;
	}

	ngOnInit() {
		this.gridColumns =
			window.innerWidth < Breakpoints.TABLET ? 1 : window.innerWidth < Breakpoints.LAPTOP ? 2 : 3;
	}
}
