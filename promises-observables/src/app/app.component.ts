import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ObservableSimplesComponent } from './components/observable-simples/observable-simples.component';
import { SubjectComponent } from './components/subject/subject.component';
import { PromisesComponent } from './components/promises/promises.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PromisesComponent, CommonModule, RouterOutlet, ObservableSimplesComponent, SubjectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'estudo-observables';
}
