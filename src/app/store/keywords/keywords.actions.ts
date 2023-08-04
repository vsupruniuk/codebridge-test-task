import { createAction, props } from '@ngrx/store';

export const setKeywordsValue = createAction('[Input] Set Keywords', props<{ keywords: string }>());
