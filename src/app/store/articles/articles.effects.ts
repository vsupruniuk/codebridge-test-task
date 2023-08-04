import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ArticlesService } from '../../services/articles.service';
import * as ArticlesActions from './articles.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ArticlesEffects {
	constructor(
		private actions$: Actions,
		private articlesService: ArticlesService,
	) {}

	loadArticles$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ArticlesActions.loadArticles),
			mergeMap(() =>
				this.articlesService.getArticles().pipe(
					map(articles => ArticlesActions.loadArticlesSuccess({ articles })),
					catchError(error => of(ArticlesActions.loadArticlesFailure({ error }))),
				),
			),
		),
	);

	loadArticle$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ArticlesActions.loadArticleById),
			mergeMap(({ id }) =>
				this.articlesService.getArticleById(id).pipe(
					map(article => ArticlesActions.loadArticleByIdSuccess({ article })),
					catchError(error => of(ArticlesActions.loadArticleByIdFailure({ error }))),
				),
			),
		),
	);
}
