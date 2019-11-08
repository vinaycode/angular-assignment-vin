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

  getUID() {
    return this.userid;
  }

  getUsers(): Observable<User[]> {
    return of<User[]>(this.user);
  }
  
  getUserid(id): Observable<User[]> {
    this.usridArray = this.user.filter(function(object) {
      //console.log("obj artid "+object.artid);
      if(object.id===id){
          return object;
      }
    });
    return of<User[]>(this.usridArray);
  }

  addUser(data) {
    //this.user.push(data);
    let updateItem = this.user.find(this.findIndexToUpdate, data.id);
    let index = this.user.indexOf(updateItem);
    this.user[index] = data;
  }
  findIndexToUpdate(data) {
        return data.id === this;
  }

  userLength() {
    return this.user.length;
  }
}

