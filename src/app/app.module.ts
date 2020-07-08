import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import {RouterModule} from '@angular/router';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { PostComponent } from './components/post/post.component';
import { PostOfUserComponent } from './components/post-of-user/post-of-user.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { CommentsComponent } from './components/comments/comments.component';
import {CommemtsOfPostComponent} from './components/commemts-of-post/commemts-of-post.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AllUsersComponent,
    AllPostsComponent,
    PostComponent,
    PostOfUserComponent,
    AllCommentsComponent,
    CommentsComponent,
    CommemtsOfPostComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
          {path: 'users', component: AllUsersComponent},
          {path: 'posts', component: AllPostsComponent},
          {path: 'users/:id/posts', component: PostOfUserComponent},
          {path: 'comments', component: AllCommentsComponent},
          {path: 'posts/:id/comments', component: CommemtsOfPostComponent},

        ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
