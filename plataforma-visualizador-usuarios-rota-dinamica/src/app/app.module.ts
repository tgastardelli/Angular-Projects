import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { TodosComponent } from './components/user/components/todos/todos.component';
import { AlbumsComponent } from './components/user/components/albums/albums.component';
import { PostsComponent } from './components/user/components/posts/posts.component';
import { PostComponent } from './components/user/components/post/post.component';
import { CommentsComponent } from './components/user/components/post/components/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PageNotFoundComponent,
    UsersListComponent,
    TodosComponent,
    AlbumsComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
