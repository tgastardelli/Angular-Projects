import { Component, inject } from '@angular/core';
import { ObservableService } from './observable.service';
import { map, Subscription, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-observable-simples',
  standalone: true,
  imports: [],
  templateUrl: './observable-simples.component.html',
  styleUrl: './observable-simples.component.scss'
})
export class ObservableSimplesComponent {

  subs!: Subscription;
  subsSwitchMap!: Subscription;

  private readonly _observableService = inject(ObservableService);

  ngOnInit() {
    this.fluxoObs();

    // this._observableService.obsSimples().subscribe((value) => {
    //   console.log(value);
    // });

    // this.subs = this._observableService.obsInterval().subscribe((value) => {
    //   console.log(value);
    // });

    // this._observableService.getTodoInfos(1).pipe(
    //   map((todoResponse: any) => {
    //     const newTodo = {
    //       id: todoResponse.id,
    //       title: todoResponse.title,
    //     };

    //     return newTodo;
    //   }),
    // ).subscribe((response) => {
    //   console.log('Todo', response);
    // });

    // this._observableService.getTodoInfos(2).subscribe((response) => {
    //   console.log('Todo 2', response);
    // });

    // this.subsSwitchMap = this._observableService.obs1().pipe(
    //   switchMap((valueObs1) => {
    //     //....
    //     console.log('Value Obs1', valueObs1);

    //     return this._observableService.obs2();
    //   }),
    //   take(1),
    // ).subscribe((valueObs2) => {
    //   console.log('Value Obs2', valueObs2);
    // });
  }

  fluxoObs() {
    console.log('fluxoObs');

    // this._observableService.obs1().subscribe(() => console.log('Obs'));
    this._observableService.getTodoInfos(1).subscribe((value) => {
      console.log(value)
      console.log('final');
    });

  }

  unsubscribeInterval() {
    this.subs?.unsubscribe();
  }

  unsubscribeSwitchMap() {
    this.subsSwitchMap?.unsubscribe();
  }
}
