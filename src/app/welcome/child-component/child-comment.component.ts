import { Component, Input } from '@angular/core';
import { Article } from '../../models/Article';

@Component({
  selector: 'app-com',
  templateUrl: './child-comment.component.html',
  styleUrls: ['./child-comment.component.css']
})
export class ChildCommentComponent {
  @Input() public cart:number;
  constructor() {
    console.log(this.cart);
  }
}
