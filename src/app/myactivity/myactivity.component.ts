import { Component } from "@angular/core";
import { DataSource } from "@angular/cdk/table";
import { Observable, of } from "rxjs";
import { MatDialog } from "@angular/material";
import { UserService } from "../services/user.service";
import { ArticleService } from "../services/article.service";
import { CommentService } from "../services/comment.service";
import { AppError } from "../common/app-error";
import { User } from "../models/User";
import { Article } from "../models/Article";
import { Comment } from "../models/Comment";
import { ComArtiTemp } from "../models/User";

@Component({
  selector: "app-myactivity",
  templateUrl: "./myactivity.component.html",
  styleUrls: ["./myactivity.component.css"]
})
export class MyactivityComponent {
  displayedLikeColumns = [];
  displayedDislikeColumns = [];
  displayedCommentColumns = [];
  constructor(
    private userService: UserService,
    private articleService: ArticleService,
    private commentService: CommentService
  ) {
    this.displayedLikeColumns = ["name"];
    this.displayedDislikeColumns = ["name"];
    this.displayedCommentColumns = ["dtp", "name", "com"];
  }

  dataSourceLiks = new UserDataSourceLiks(this.userService,this.articleService);
  dataSourceDisliks = new UserDataSourceDisliks(this.userService,this.articleService);
  dataSourceComments = new UserDataSourceComments(this.userService,this.articleService,this.commentService);
}

export class UserDataSourceLiks extends DataSource<any> {
  user: User[] = [];
  article: Article[] = [];
  error: AppError;
  x: number = 0;
  constructor(
    private userService: UserService,
    private articleService: ArticleService
  ) {
    super();
  }

  connect(): Observable<Article[]> {
    this.user = this.userService.getDataid(this.userService.userid);

    this.userService.getDataid(this.userService.getUID()).subscribe(
      (user: User[]) => {
        console.log("Success! Get User Successful! (via Observable)");
        this.user = user;
      },
      (error: AppError) => {
        this.error = error;
        console.log(
          "Failed! Error occurred when getting User. (via Observable)",
          error
        );
      }
    );

    for (let u of this.user) {
      for (let l of u.likes) {
        this.articleService.getArticle(l.lartid).subscribe(
          (article: Article) => {
            console.log("Success! Get Article Successful!");
            this.article[this.x] = article;
            this.x++;
          },
          (error: AppError) => {
            console.log("Failed! Error occurred when getting article.", error);
          }
        );
      }
    }

    return of<Article[]>(this.article);
  }

  disconnect() {}
}

export class UserDataSourceDisliks extends DataSource<any> {
  user: User[] = [];
  article: Article[] = [];
  error: AppError;
  x: number = 0;
  constructor(
    private userService: UserService,
    private articleService: ArticleService
  ) {
    super();
  }

  connect(): Observable<Article[]> {
    this.user = this.userService.getDataid(this.userService.userid);

    this.userService.getDataid(this.userService.getUID()).subscribe(
      (user: User[]) => {
        console.log("Success! Get User Successful! (via Observable)");
        this.user = user;
      },
      (error: AppError) => {
        this.error = error;
        console.log(
          "Failed! Error occurred when getting User. (via Observable)",
          error
        );
      }
    );

    for (let u of this.user) {
      for (let d of u.dislikes) {
        this.articleService.getArticle(d.dartid).subscribe(
          (article: Article) => {
            console.log("Success! Get Article Successful!");
            this.article[this.x] = article;
            this.x++;
          },
          (error: AppError) => {
            console.log("Failed! Error occurred when getting article.", error);
          }
        );
      }
    }

    return of<Article[]>(this.article);
  }

  disconnect() {}
}

export class UserDataSourceComments extends DataSource<any> {
  user: User[] = [];
  article: Article[] = [];
  cat: ComArtiTemp[] = [];
  comment: Comment[] = [];
  error: AppError;
  x: number = 0;
  y: number = 0;
  constructor(
    private userService: UserService,
    private articleService: ArticleService,
    private commentService: CommentService
  ) {
    super();
  }

  connect(): Observable<ComArtiTemp[]> {
    this.user = this.userService.getDataid(this.userService.userid);

    this.userService.getDataid(this.userService.getUID()).subscribe(
      (user: User[]) => {
        console.log("Success! Get User Successful! (via Observable)");
        this.user = user;
      },
      (error: AppError) => {
        this.error = error;
        console.log(
          "Failed! Error occurred when getting User. (via Observable)",
          error
        );
      }
    );

    for (let u of this.user) {
      for (let c of u.comments) {
        this.commentService.getDatabyid(c.comid).subscribe(
          (comment: Comment) => {
            console.log("Success! Get Comment Successful!");
            this.comment[this.x] = comment;
            this.x++;
          },
          (error: AppError) => {
            console.log("Failed! Error occurred when getting comment.", error);
          }
        );
      }
    }

    for (let ca of this.comment) {
      let c: ComArtiTemp = new ComArtiTemp();
      c.com = ca.comment;
      this.articleService.getArticle(ca.artid).subscribe(
        (article: Article) => {
          console.log("Success! Get Article Successful!");
          c.arti = article.title;
        },
        (error: AppError) => {
          console.log("Failed! Error occurred when getting article.", error);
        }
      );
      c.dtp = ca.date_posted;
      this.cat[this.y] = c;
      this.y++;
    }

    return of<ComArtiTemp[]>(this.cat);
  }

  disconnect() {}
}
