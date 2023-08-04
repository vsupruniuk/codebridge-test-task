import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../components/app/app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { ArticleModule } from './article.module';
import { KeywordsFilterComponent } from '../components/keywords-filter/keywords-filter.component';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticlesComponent } from '../components/articles/articles.component';
import { MatDividerModule } from '@angular/material/divider';
import { ArticlesListComponent } from '../components/articles-list/articles-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ArticleCardComponent } from '../components/article-card/article-card.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { articlesReducer } from '../store/articles/articles.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ArticlesEffects } from '../store/articles/articles.effects';
import { MatCardModule } from '@angular/material/card';
import { TrimExtraDescriptionPipe } from '../pipes/trim-extra-description.pipe';
import { keywordsReducer } from '../store/keywords/keywords.reducer';
import { FormsModule } from '@angular/forms';
import { KeywordsPipe } from '../pipes/keywords.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const routes: Routes = [
	{
		path: '',
		component: HomePageComponent,
	},
	{
		path: 'article/:id',
		loadChildren: () => import('./article.module').then(module => module.ArticleModule),
	},
	{
		path: '**',
		redirectTo: '',
		pathMatch: 'full',
	},
];

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		KeywordsFilterComponent,
		ArticlesComponent,
		ArticlesListComponent,
		ArticleCardComponent,
		TrimExtraDescriptionPipe,
		KeywordsPipe,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		ArticleModule,
		RouterModule.forRoot(routes),
		HttpClientModule,
		StoreModule.forRoot({ articles: articlesReducer, keywords: keywordsReducer }),
		EffectsModule.forRoot([ArticlesEffects]),
		MatInputModule,
		MatIconModule,
		MatDividerModule,
		MatGridListModule,
		MatCardModule,
		FormsModule,
		MatProgressSpinnerModule,
	],
	providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }],
	bootstrap: [AppComponent],
})
export class AppModule {}
