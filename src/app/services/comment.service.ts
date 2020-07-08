import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comments} from '../models/Comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getAllComment(): Observable<Comments[]>{
    return this.httpClient.get<Comments[]>(`https://jsonplaceholder.typicode.com/comments`);
  }

  getCommentOfPost(id: string): Observable<Comments[]>{
    return this.httpClient.get<Comments[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }
}
