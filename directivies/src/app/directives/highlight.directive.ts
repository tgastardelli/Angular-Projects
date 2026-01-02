import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.background-color') bgColor = 'orange';

  @HostListener('mouseover') onMouseOver() {
    this.bgColor = 'orange';
  }

  @HostListener('mouseout') onMouseOut() {
    this.bgColor = 'transparent'
  }
}
