import { Directive, HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appItemListCat]'
})
export class ItemListCatDirective {

  @HostBinding('style.background') private background = '#FEFEFE';  
  constructor() { }
  @HostListener('mouseover', ['$event']) public onMouseOver(evt){
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('mouseleave', ['$event']) public onMouseLeave(evt){
    evt.preventDefault();
    evt.stopPropagation();
  }
}
