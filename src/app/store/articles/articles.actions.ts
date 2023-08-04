import { createAction, props } from '@ngrx/store';
import { IArticlesResponse } from '../../types/IArticlesResponse';
import { IArticle } from '../../types/IArticle';

export const loadArticles = createAction('[Articles] Load Articles');
export const loadArticlesSuccess = createAction(
	'[Articles] Load Articles Success',
	props<{ articles: IArticlesResponse }>(),
);
export const loadArticlesFailure = createAction(
	'[Articles] Load Articles Failure',
	props<{ error: any }>(),
);
export const loadArticleById = createAction(
	'[Articles] Load Article by ID',
	props<{ id: string }>(),
);
export const loadArticleByIdSuccess = createAction(
	'[Articles] Load Article by ID Success',
	props<{ article: IArticle }>(),
);
export const loadArticleByIdFailure = createAction(
	'[Articles] Load Article by ID Failure',
	props<{ error: any }>(),
);
