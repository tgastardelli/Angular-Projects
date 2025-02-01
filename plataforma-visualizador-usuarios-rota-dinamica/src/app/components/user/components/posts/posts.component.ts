import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PostsListService } from 'src/app/services/posts-list.service';
import { PostsListResponse } from 'src/app/types/posts-list-response';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent  implements OnInit {

  public postList$: Observable<PostsListResponse> = of([]);

  constructor(
    private readonly _postListService: PostsListService,
    private readonly _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.parent?.params.subscribe((params) => {

      console.log(params);

      this.postList$ = this._postListService.getUserPosts(params['userId']);
    })
      
  }
}
