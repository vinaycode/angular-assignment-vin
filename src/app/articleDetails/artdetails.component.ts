import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../models/Article';
import { Comment } from '../models/Comment';
import { ArticleService } from '../services/article.service';
import {DataSource} from '@angular/cdk/table';
import { CommentService } from '../services/comment.service';
import { AppError } from '../common/app-error';
import {CommentDialogComponent} from '../comment-dialog/comment-dialog.component';
import {MatDialog} from '@angular/material';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-art-detail',
  templateUrl: './artdetails.component.html',
  styleUrls: ['./artdetails.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article: Article = new Article();
  comments: Comment[] = [];
  id: number;
  constructor(
    private service: ArticleService,
    private dataService: CommentService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {}


  displayedColumns = ['uname', 'comment', 'date_posted', 'delete'];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];

      if (isNaN(this.id) || !this.id) {
        console.log(
          `Article id is not a number (or) is 0. (id = ${params['id']})`
        );
        this.router.navigate(['/not-found']);
        return;
      }

      this.service.getArticle(this.id).subscribe(
        (article: Article) => {
          console.log('Success! Get Article Successful!');
          this.article = article;
        },
        (error: AppError) => {
          console.log('Failed! Error occurred when getting article.', error);
        }
      );
    });

    this.dataService.getDataid(this.id).subscribe(
        (comments: Comment) => {
          console.log('Success! Get Comment Successful!');
          this.comments = comments;
        },
        (error: AppError) => {
          console.log('Failed! Error occurred when getting comments.', error);
        }
      );
  }

deleteComment(id) {
      this.dataService.deleteComment(id);
      
      this.dataService.getDataid(this.id).subscribe(
        (comments: Comment) => {
          console.log('Success! Get Comment Successful!');
          this.comments = comments;
        },
        (error: AppError) => {
          console.log('Failed! Error occurred when getting comments.', error);
        }
      );
      
      if(this.article.comments>0){
        this.article.comments--;
        this.service.addArticles(this.article);
      }
  }
  
  openDialog(e,id): void {
    let dialogRef = this.dialog.open(CommentDialogComponent, {
      width: '45%',
      data: [{"data": "Add Comment","artid": id}],
    });
    dialogRef.componentInstance.event.subscribe((result) => {
      this.dataService.addComment(result.data);
      this.dataService.getDataid(this.id).subscribe(
        (comments: Comment) => {
          console.log('Success! Get Comment Successful!');
          this.comments = comments;
        },
        (error: AppError) => {
          console.log('Failed! Error occurred when getting comments.', error);
        }
      );
    });
  }

}


