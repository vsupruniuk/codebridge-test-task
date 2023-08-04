import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlePageComponent } from '../components/article-page/article-page.component';
import { RouterModule } from '@angular/router';
import { ArticleBackgroundComponent } from '../components/article-background/article-background.component';
import { MatCardModule } from '@angular/material/card';
import { ArticleSummaryComponent } from '../components/article-summary/article-summary.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [ArticlePageComponent, ArticleBackgroundComponent, ArticleSummaryComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{ path: 'article/:id', component: ArticlePageComponent }]),
		MatCardModule,
		MatFormFieldModule,
		MatIconModule,
	],
	bootstrap: [ArticlePageComponent],
})
export class ArticleModule {}
