import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-post-of-user',
  templateUrl: './post-of-user.component.html',
  styleUrls: ['./post-of-user.component.css']
})
export class PostOfUserComponent {
  posts: Post[];
  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.postService.getPostOfUsers(value.id).subscribe(post => this.posts = post);
    });

  }


}
