import { Component, Input } from '@angular/core';
import { Comment } from '../../models/Comment';
import { CommentService } from '../../services/comment.service';
import { AppError } from '../../common/app-error';

@Component({
  selector: 'app-com',
  templateUrl: './child-comment.component.html',
  styleUrls: ['./child-comment.component.css']
})
export class ChildComponent {
  @Input() public cart:number;
  comments: Comment[] = [];
  constructor(private dataService: CommentService,) {
    console.log(this.cart);
  }
  ngOnInit() {
    this.dataService.getDataid(this.cart).subscribe(
        (comments: Comment) => {
          console.log('Success! Get Comment Successful!');
          this.comments = comments;
        },
        (error: AppError) => {
          console.log('Failed! Error occurred when getting comments.', error);
        }
      );
  }

}
