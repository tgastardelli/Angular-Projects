import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SubjectService } from '../../subject.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-consumidor',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './consumidor.component.html',
  styleUrl: './consumidor.component.scss'
})
export class ConsumidorComponent {
  valueChanged$: Observable<number> = of(0);

  private readonly _subjectService = inject(SubjectService);

  ngOnInit() {
    this.valueChanged$ = this._subjectService.valueChanged();
  }
}
