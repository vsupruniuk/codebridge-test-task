import { createReducer, on } from '@ngrx/store';
import * as KeywordsActions from './keywords.actions';

export interface KeywordsState {
	keywords: string;
}

export const initialState: KeywordsState = {
	keywords: '',
};

export const keywordsReducer = createReducer(
	initialState,
	on(KeywordsActions.setKeywordsValue, (state, { keywords }) => ({ ...state, keywords })),
);
