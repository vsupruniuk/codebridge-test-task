import { Component, Input } from '@angular/core';
import { IArticle } from '../../types/IArticle';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-article-background',
	templateUrl: './article-background.component.html',
	styleUrls: ['./article-background.component.scss'],
})
export class ArticleBackgroundComponent {
	@Input({ required: true }) article$: Observable<IArticle | null>;
}
