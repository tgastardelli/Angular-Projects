import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPost } from 'src/app/interfaces/post.interface';
import { PostsListService } from 'src/app/services/posts-list.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public post$: Observable<IPost> = of();

  @Input() set postId(postId: string) {
    console.log('postId: ', postId);

    this.post$ = this._postListService.getPost(postId);
  }

  constructor(
    private readonly _postListService: PostsListService,
  ) { }

  ngOnInit(): void {

  }
}
