import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsListService } from 'src/app/services/albums-list.service';
import { AlbumsListResponse } from 'src/app/types/albums-list.response';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent  implements OnInit {

  public albumsList$: Observable<AlbumsListResponse> = of([]); 

  constructor(
    private readonly _albumsListService: AlbumsListService,
    private readonly _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.parent?.params.subscribe((params) => {
      
      console.log(params);

      this.albumsList$ = this._albumsListService.getUserAlbums(params['userId']);
    })
  }

}
