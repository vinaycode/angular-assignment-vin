import {Injectable} from '@angular/core';
import {User} from '../models/User';
import {Observable, of} from 'rxjs';
import data from '../../assets/user.json';

@Injectable()
export class UserService {
  usridArray: User[] = [];
  private user : User[] = data;
  public userid: number;
    
  constructor() {
    this.userid = 1;
  }

  getData(): Observable<User[]> {
    return of<User[]>(this.user);
  }
  
  getDataid(id): Observable<User[]> {
    this.usridArray = this.user.filter(function(object) {
      //console.log("obj artid "+object.artid);
      if(object.id===id){
          return object;
      }
    });
    return of<User[]>(this.usridArray);
  }

  addUser(data) {
    this.user.push(data);
  }

  userLength() {
    return this.user.length;
  }
}

