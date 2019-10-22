import {Injectable} from '@angular/core';
import {Comment} from '../models/Comment';
import {Observable, of} from 'rxjs';
import data from '../../assets/comment.json';

@Injectable()
export class CommentService {
  comidArray: Comment[] = [];
  private comment : Comment[] = data;
    
  constructor() {
  }

  getData(): Observable<Comment[]> {
    return of<Comment[]>(this.comment);
  }

  getDatabyid(id): Observable<Comment> {
this.comidArray = this.comment.filter(function(object) {
      if(object.id===id){
          return object;
      }
    });
        
    return of<Comment>(this.comidArray[0]);
  }
  
  getDataid(artid): Observable<Comment[]> {
    this.comidArray = this.comment.filter(function(object) {
      //console.log("obj artid "+object.artid);
      if(object.artid===artid){
          return object;
      }
    });
    return of<Comment[]>(this.comidArray);
  }

  addComment(data) {
    this.comment.push(data);
  }

  deleteComment(index) {
    
    this.comidArray = this.comment.filter(function(object) {
      //console.log("obj artid "+object.artid);
      if(object.id!=index){
          return object;
      }
    });
    this.comment =this.comidArray;
  }

  commentLength() {
    return this.comment.length;
  }
}
