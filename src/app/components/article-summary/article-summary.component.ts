import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticle } from '../../types/IArticle';

@Component({
	selector: 'app-article-summary',
	templateUrl: './article-summary.component.html',
	styleUrls: ['./article-summary.component.scss'],
})
export class ArticleSummaryComponent {
	@Input({ required: true }) article$: Observable<IArticle | null>;
}
