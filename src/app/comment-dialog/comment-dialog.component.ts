import {Component, EventEmitter, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { Article } from '../models/Article';
import { AppError } from '../common/app-error';
import { ArticleService } from '../services/article.service';
import {CommentService} from '../services/comment.service';
import { MyComment } from '../models/User';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-comment-dialog',
  templateUrl: './comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.css']
})
export class CommentDialogComponent {
  article: Article = new Article();
  mycomments: MyComment;
  comlength:number;
  user: User[] = [];
  error: AppError;
  blogPost = {
    id: 0,
    artid: 0,
    uname: '',
    comment: '',
    date_posted: new Date()
  };
  public event: EventEmitter<any> = new EventEmitter();

  constructor(private service: ArticleService,
    public dialogRef: MatDialogRef<CommentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dataService: CommentService,private userv: UserService
  ) {
    data.forEach((data)=>  this.blogPost.artid = data.artid);
  }

    ngOnInit() {
    
    console.log("UID : "+this.userv.getUID());
    this.userv.getUserid(this.userv.getUID()).subscribe(
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

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.blogPost.id = this.dataService.commentLength();
    this.event.emit({data: this.blogPost});
    this.dialogRef.close();

    this.service.getArticle(this.blogPost.artid).subscribe(
        (article: Article) => {
          console.log('Success! Get Article Successful!');
          this.article = article;
        },
        (error: AppError) => {
          console.log('Failed! Error occurred when getting article.', error);
        }
      );
      this.article.comments++;
    this.service.updateArticle(this.article);
    
    this.mycomments = new MyComment();
    this.mycomments.comid = this.blogPost.id;
    this.comlength = this.user[0].comments.length;
    this.user[0].comments[this.comlength] = this.mycomments;

  }
}
