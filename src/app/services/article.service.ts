import { Injectable } from "@angular/core";
import { Article } from "../models/Article";
import { Observable, of } from "rxjs";
//import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";
import data from "../../assets/article.json";

@Injectable()
export class ArticleService {
  // private apiUrl = "https://my-json-server.typicode.com/vinaycode/repo/articles";  // JSON resource
  private articles: Article[] = data;
  private artiArray: Article[] = [];

  constructor() {
    // private http: Http
  }

  getArticles(): Observable<Article[]> {
    return of<Article[]>(this.articles);
    /*
      return this.http.get(this.apiUrl)
    .pipe(
        map((res: Response) => res.json())
    );
*/
  }

  getArticle(id): Observable<Article> {
    this.artiArray = this.articles.filter(function(object) {
      if (object.id === id) {
        return object;
      }
    });

    return of<Article>(this.artiArray[0]);

    /*
  return this.http
      .get(`${this.apiUrl}/${id}`)
    .pipe(
        map((res: Response) => res.json()));
  */
  }

/*
  addArticlesX(data) {
    this.articles.push(data);
  }
*/

  updateArticle(data) {
    let updateItem = this.articles.find(this.findIndexToUpdate, data.id);
    let index = this.articles.indexOf(updateItem);
    this.articles[index] = data;
  }

  findIndexToUpdate(data) {
    return data.id === this;
  }
/*
  deleteArticles(index) {
    this.articles = [
      ...this.articles.slice(0, index),
      ...this.articles.slice(index + 1)
    ];
  }
  */

  articlesLength() {
    return this.articles.length;
  }
}
