import {Injectable} from '@angular/core';
import {Comment} from '../models/Comment';
import {Observable, of} from 'rxjs';
import data from '../../assets/comment.json';

@Injectable()
export class CommentService {
  artidArray: Comment[] = [];
  private comment : Comment[] = data;
    
  constructor() {
  }

  getData(): Observable<Comment[]> {
    return of<Comment[]>(this.comment);
  }

  
  getDataid(artid): Observable<Comment[]> {
    this.artidArray = this.comment.filter(function(object) {
      //console.log("obj artid "+object.artid);
      if(object.artid===artid){
          return object;
      }
    });
    return of<Comment[]>(this.artidArray);
  }

  addComment(data) {
    this.comment.push(data);
  }

  deleteComment(index) {
    this.comment = [...this.comment.slice(0, index), ...this.comment.slice(index + 1)];
    console.log(this.comment);
  }

  commentLength() {
    return this.comment.length;
  }
}
