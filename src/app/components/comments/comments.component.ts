import {Component, Input} from '@angular/core';
import {Comments} from '../../models/Comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent  {

  @Input()
  comments: Comments;
  constructor() { }

}
