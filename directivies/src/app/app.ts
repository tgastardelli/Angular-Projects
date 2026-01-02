import { Component, ElementRef, Output, QueryList, signal, ViewChild, ViewChildren } from '@angular/core';
import { Filho } from "./filho/filho";
import { CommonModule } from '@angular/common';
import { ComDiretiva } from './com-diretiva/com-diretiva';

@Component({
  selector: 'app-root',
  imports: [Filho, CommonModule, ComDiretiva],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('directivies');

  @ViewChild('filhoComp') filhoCompRef!: Filho;
  @Output() public sendData: string = 'Estou enviando';

  public buttonsList = ['Botão 1', 'Botão 2', 'Botão 3'];
  @ViewChildren('meuButton') buttonsEl!: QueryList<ElementRef<HTMLButtonElement>>;

  public hello(): void {
    this.filhoCompRef.dizerOi();
    this.filhoCompRef.message = 'Eu disse Oi!!!'
  }

}
