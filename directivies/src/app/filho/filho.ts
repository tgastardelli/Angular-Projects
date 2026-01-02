import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filho',
  imports: [],
  templateUrl: './filho.html',
  styleUrl: './filho.scss',
})
export class Filho {
  public message: string = 'Sou o componente filho!'
  @Input() message2: string = ''

  public dizerOi(): void {
    alert('Oi !!!!')
  }
}
