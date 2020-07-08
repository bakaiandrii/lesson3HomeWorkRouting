import {Component} from '@angular/core';
import {CommentService} from '../../services/comment.service';
import {ActivatedRoute} from '@angular/router';
import {Comments} from '../../models/Comments';

@Component({
  selector: 'app-commemts-of-post',
  templateUrl: './commemts-of-post.component.html',
  styleUrls: ['./commemts-of-post.component.css']
})
export class CommemtsOfPostComponent {

  comments: Comments[];

  constructor(private commentService: CommentService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.commentService.getCommentOfPost(value.id).subscribe(comments => this.comments = comments);
    });
  }


}
