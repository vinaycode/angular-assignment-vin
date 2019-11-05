import { Injectable } from "@angular/core";
import { Article } from "../models/Article";
import { Observable, of } from "rxjs";
import { Http, Response } from "@angular/http";
import { AppError } from "../common/app-error";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";
import data from "../../assets/article.json";

@Injectable()
export class ArticleMockService {
  constructor() {}
  getArticles(): Observable<Article[]> {
    return of<Article[]>([
      {
        id: 1,
        title: "Typi non habent claritatem insitam",
        content:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.",
        writer: "Weblogtemplates",
        stime: "8:41 PM",
        ltime: "2015-02-27T20:41:00-08:00",
        imgpath:
          "https://raw.githubusercontent.com/vinaycode/images/master/board-761586_1280.jpg",
        limgpath:
          "https://raw.githubusercontent.com/vinaycode/images/master/board-large-761586_1280.jpg",
        likes: 33,
        dislikes: 6,
        comments: 2
      }
    ]);
  }

  getArticle(): Observable<Article[]> {
    return of<Article[]>([
      {
        id: 1,
        title: "Typi non habent claritatem insitam",
        content:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.",
        writer: "Weblogtemplates",
        stime: "8:41 PM",
        ltime: "2015-02-27T20:41:00-08:00",
        imgpath:
          "https://raw.githubusercontent.com/vinaycode/images/master/board-761586_1280.jpg",
        limgpath:
          "https://raw.githubusercontent.com/vinaycode/images/master/board-large-761586_1280.jpg",
        likes: 33,
        dislikes: 6,
        comments: 2
      }
    ]);
  }

  addArticles(data) {
  
  }

  findIndexToUpdate(data) {
    return 1;
  }
}
