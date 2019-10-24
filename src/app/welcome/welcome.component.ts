import { Component, OnInit } from '@angular/core';
import { AppError } from "../common/app-error";
import { Article } from '../models/Article';
import { User } from '../models/User';
import { Likes } from '../models/User';
import { Dislikes } from '../models/User';
import { ArticleService } from '../services/article.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  articles: Article[] = [];
  user: User[] = [];
  liklength:number;
  mylikes: Likes;
  mydislikes: Dislikes;
  error: AppError;

  constructor(private service: ArticleService,private userv: UserService) { }

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

    this.userv.getDataid(this.userv.getUID()).subscribe(
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
  }

  onLikeClick(art){
    art.likes++;
    this.service.addArticles(art);
    this.mylikes = new Likes();
    this.mylikes.lartid = art.id;
    this.liklength = this.user[0].likes.length;
    this.user[0].likes[this.liklength] = this.mylikes;
  }

  onDisLikeClick(art){
    art.dislikes++;
    this.service.addArticles(art);
    this.mydislikes = new Dislikes();
    this.mydislikes.dartid = art.id;
    this.liklength = this.user[0].dislikes.length;
    this.user[0].dislikes[this.liklength] = this.mydislikes;
  }

}
