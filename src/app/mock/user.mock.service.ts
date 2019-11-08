import { Injectable } from "@angular/core";
import { User } from "../models/User";
import { Observable, of } from "rxjs";
import data from "../../assets/user.json";

@Injectable()
export class UserMockService {
  constructor() {}

  getUID() {
    return 1;
  }

  getUser(): Observable<User[]> {
    return of<User[]>([
      {
        id: 1,
        name: "CTS G-6",
        likes: [
          {
            lartid: 1
          },
          {
            lartid: 3
          }
        ],
        dislikes: [
          {
            dartid: 2
          },
          {
            dartid: 4
          }
        ],
        comments: [
          {
            comid: 1
          },
          {
            comid: 2
          }
        ]
      }
    ]);
  }

  getUserid(id): Observable<User[]> {
    return of<User[]>([
      {
        id: 1,
        name: "CTS G-6",
        likes: [
          {
            lartid: 1
          },
          {
            lartid: 3
          }
        ],
        dislikes: [
          {
            dartid: 2
          },
          {
            dartid: 4
          }
        ],
        comments: [
          {
            comid: 1
          },
          {
            comid: 2
          }
        ]
      }
    ]);
  }

   userLength() {
    return 1;
  }
}
