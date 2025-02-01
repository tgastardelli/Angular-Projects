import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CommentsListService } from 'src/app/services/comments-list.service';
import { ICommentsResponse } from 'src/app/types/comments-list-response';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  public commentsList$: Observable<ICommentsResponse> = of([]);

  constructor(
    private readonly _commentsListService: CommentsListService,
    private readonly _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.parent?.params.subscribe((params) => {

      console.log(params);

      this.commentsList$ = this._commentsListService.getPostComments(params['postId']);
    })
  }
}
