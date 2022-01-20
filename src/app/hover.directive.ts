import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  backgroundColor: string;

  constructor(private el: ElementRef) { }

  @HostListener('mouseover')
  onMouseOver() {
    this.hover ('#86a6df');
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.hover (null);
  }

  private hover(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
