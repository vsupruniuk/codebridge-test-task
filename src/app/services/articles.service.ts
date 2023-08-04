import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IArticlesResponse } from '../types/IArticlesResponse';
import { environment } from '../../environment/environment';
import { IArticle } from '../types/IArticle';

@Injectable({
	providedIn: 'root',
})
export class ArticlesService {
	constructor(private httpClient: HttpClient) {}

	getArticles(): Observable<IArticlesResponse> {
		return this.httpClient.get<IArticlesResponse>(`${environment.newsApiUrl}/articles/`);
	}

	getArticleById(id: string): Observable<IArticle> {
		return this.httpClient.get<IArticle>(`${environment.newsApiUrl}/articles/${id}/`);
	}
}
