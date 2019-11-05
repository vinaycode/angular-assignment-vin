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

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


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
        this.router.navigate(['/not-found']);    // remove for testing
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

  generatePdf(){
    //   https://www.ngdevelop.tech/angular-8-export-to-pdf-using-pdfmake/

 // const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };    //  just to check
  const documentDefinition = this.getDocumentDefinition();
 // pdfMake.createPdf(documentDefinition).download();    // download the pdf
 // pdfMake.createPdf(documentDefinition).print();     //  direct send to print
  pdfMake.createPdf(documentDefinition).open();      //  open in new tab
 // pdfMake.createPdf(documentDefinition).open({}, window);    //  open in same window
 }

 getDocumentDefinition() {
    return {
      content: [
        {
          text: this.article.title,
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 0]
        },
        {
          text: "Posted by "+this.article.writer+" on "+this.article.stime,
          fontSize: 10,
          alignment: 'center',
          background:'#eee',
          margin: [0, 0, 0, 20]
        },
        {
          text: this.article.content,
          fontSize: 14,
          alignment: 'left',
          margin: [0, 0, 0, 20]
        },
        {
          text: "Likes : "+this.article.likes,
          fontSize: 14,
          alignment: 'right',
          margin: [0, 0, 0, 10]
        },
        {
          text: "Dislikes : "+this.article.dislikes,
          fontSize: 14,
          alignment: 'right',
          margin: [0, 0, 0, 10]
        }]
    };
 }
}


