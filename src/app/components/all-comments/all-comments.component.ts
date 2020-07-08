import {Component, OnInit} from '@angular/core';
import {Comments} from '../../models/Comments';
import {CommentService} from '../../services/comment.service';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent {
  comments: Comments[];

  constructor(private commentService: CommentService) {
    this.commentService.getAllComment().subscribe(value => this.comments = value);
  }

}
