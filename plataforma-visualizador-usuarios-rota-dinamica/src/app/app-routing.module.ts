import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserComponent } from './components/user/user.component';
import { TodosComponent } from './components/user/components/todos/todos.component';
import { AlbumsComponent } from './components/user/components/albums/albums.component';
import { PostsComponent } from './components/user/components/posts/posts.component';
import { PostComponent } from './components/user/components/post/post.component';
import { CommentsComponent } from './components/user/components/post/components/comments/comments.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/user-list',
    pathMatch: 'full'
  },
  {
    path: 'user-list',
    title: 'userList',
    component: UsersListComponent,
  },
  {
    path: 'user/:userId',
    title: 'área do usuário',
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'todos',
        pathMatch: 'full'
      },
      {
        path: 'todos',
        component: TodosComponent
      },
      {
        path: 'albums',
        component: AlbumsComponent
      },
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: 'post/:postId',
        component: PostComponent,
        children: [
          {
            path: 'comments',
            component: CommentsComponent
          }
        ]
      }
    ]
  },
  {
    path: '**',
    title: 'Page Not Found',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
