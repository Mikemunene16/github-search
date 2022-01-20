import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  backgroundColor: string;

  constructor(private el: ElementRef) { }

  @HostListener('mouseover')
  onMouseOver() {
    // this.backgroundColor = '#fff';
  }

  @HostListener('mouseout')
  onMouseOut() {
    // this.backgroundColor =  '#000';
  }

  private hover(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
