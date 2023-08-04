import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KeywordsState } from './keywords.reducer';

export const selectKeywordsState = createFeatureSelector<KeywordsState>('keywords');

export const selectKeywordsValue = createSelector(selectKeywordsState, state => state.keywords);
