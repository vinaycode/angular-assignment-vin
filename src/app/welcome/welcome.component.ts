import { Component, OnInit } from '@angular/core';
import { AppError } from "../common/app-error";
import { Article } from '../models/Article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  articles: Article[] = [];
  error: AppError;
  constructor(private service: ArticleService) { }

  ngOnInit() {
    this.service.getArticles().subscribe(
      (articles: Article[]) => {
        console.log("Success! Get Article Successful! (via Observable)");
        this.articles = articles;
      },
      (error: AppError) => {
        this.error = error;
        console.log(
          "Failed! Error occurred when getting Article. (via Observable)",
          error
        );
      }
    );
  }

  onLikeClick(e,art){
    art.likes++;
    this.service.addArticles(art);
  }

  onDisLikeClick(e,art){
    art.dislikes++;
    this.service.addArticles(art);
  }

}
