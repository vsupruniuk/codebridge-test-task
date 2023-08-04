import { createReducer, on } from '@ngrx/store';
import * as ArticlesActions from './articles.actions';
import { IArticlesResponse } from '../../types/IArticlesResponse';
import { IArticle } from '../../types/IArticle';

export interface ArticleState {
	articles: IArticlesResponse | null;
	article: IArticle | null;
	loading: boolean;
	error: any;
}

export const initialState: ArticleState = {
	articles: null,
	article: null,
	loading: false,
	error: null,
};

export const articlesReducer = createReducer(
	initialState,
	on(ArticlesActions.loadArticles, state => ({ ...state, loading: true, error: null })),
	on(ArticlesActions.loadArticlesSuccess, (state, { articles }) => ({
		...state,
		articles,
		loading: false,
		error: null,
	})),
	on(ArticlesActions.loadArticlesFailure, (state, { error }) => ({
		...state,
		loading: false,
		error,
	})),
	on(ArticlesActions.loadArticleById, state => ({ ...state, loading: true, error: null })),
	on(ArticlesActions.loadArticleByIdSuccess, (state, { article }) => ({
		...state,
		article,
		loading: false,
		error: null,
	})),
	on(ArticlesActions.loadArticleByIdFailure, (state, { error }) => ({
		...state,
		loading: false,
		error,
	})),
);
