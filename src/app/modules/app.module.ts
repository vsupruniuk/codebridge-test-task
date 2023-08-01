import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../components/app/app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { ArticleModule } from './article.module';

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
	declarations: [AppComponent, HomePageComponent],
	imports: [BrowserModule, ArticleModule, RouterModule.forRoot(routes)],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
