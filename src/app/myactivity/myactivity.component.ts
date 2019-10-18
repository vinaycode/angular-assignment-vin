import {Component} from '@angular/core';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs/Observable';
import {MatDialog} from '@angular/material';
import {UserService} from '../services/user.service';
import {User} from '../models/User';

@Component({
  selector: 'app-myactivity',
  templateUrl: './myactivity.component.html',
  styleUrls: ['./myactivity.component.css']
})
export class MyactivityComponent {
  
  displayedLikeColumns = [];
  displayedDislikeColumns = [];
 // displayedCommentColumns = ['name', 'name', 'name'];
  constructor(private userService: UserService) {
    
  this.displayedLikeColumns = ['name'];
  this.displayedDislikeColumns = ['name'];
 // displayedCommentColumns = ['name', 'name', 'name'];
  }

  dataSource = new UserDataSource(this.userService);
}


export class UserDataSource extends DataSource<any> {
  constructor(private userService: UserService) {
    super();
  }

  connect(): Observable<User[]> {
    return this.userService.getData();
  }

  disconnect() {
  }
}
