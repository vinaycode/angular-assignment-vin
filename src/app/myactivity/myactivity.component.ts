import {Component} from '@angular/core';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs/Observable';
import {MatDialog} from '@angular/material';
//import {UserService} from '../services/user.service';
//import {User} from '../models/User';

@Component({
  selector: 'app-myactivity',
  templateUrl: './myactivity.component.html',
  styleUrls: ['./myactivity.component.css']
})
export class MyactivityComponent {
  constructor() {
  }

//  displayedLikeColumns = ['name'];
 // displayedDislikeColumns = ['name'];
 // displayedCommentColumns = ['name', 'name', 'name'];
 // dataSource = new ArticleDataSource(this.articleService);
}

/*

export class ArticleDataSource extends DataSource<any> {
  constructor(private articleService: UserService) {
    super();
  }

  connect(): Observable<User[]> {
    return this.articleService.getData();
  }

  disconnect() {
  }
}
*/