import { Injectable } from "@angular/core";
import { User } from "../models/User";
import { Observable, of } from "rxjs";
import data from "../../assets/user.json";

@Injectable()
export class CommentMockService {
  comidArray: Comment[] = [];
  private comment : Comment[] = data;
  
  constructor() {}
  getData(): Observable<Comment[]> {
    return of<Comment[]>([
      {
        id: 0,
        artid: 1,
        uname: "User One",
        comment: "Comment 11",
        date_posted: "Thu Oct 17 2019 15:38:25 GMT+0530 (India Standard Time)"
      },
      {
        id: 1,
        artid: 1,
        uname: "User One",
        comment: "Comment 12",
        date_posted: "Thu Oct 17 2019 15:38:25 GMT+0530 (India Standard Time)"
      }
    ]);
  }

  getDatabyid(id): Observable<Comment> {
    return of<Comment>({
      id: 0,
      artid: 1,
      uname: "User One",
      comment: "Comment 11",
      date_posted: "Thu Oct 17 2019 15:38:25 GMT+0530 (India Standard Time)"
    });
  }

  getDataid(artid): Observable<Comment[]> {
    return of<Comment[]>([
      {
        id: 0,
        artid: 1,
        uname: "User One",
        comment: "Comment 11",
        date_posted: "Thu Oct 17 2019 15:38:25 GMT+0530 (India Standard Time)"
      }
    ]);
  }

  /*addComment(data) {
    this.comment.push(data);
  }*/

  deleteComment(index) {
    this.comidArray = this.comment.filter(function(object) {
      //console.log("obj artid "+object.artid);
      if (object.id != index) {
        return object;
      }
    });
    this.comment = this.comidArray;
  }

  commentLength() {
    return 2;
  }
}
