import { IArticle } from './IArticle';

export interface IArticlesResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: IArticle[];
}
