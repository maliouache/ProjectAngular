import { Directive, HostListener, HostBinding, Output} from '@angular/core';

@Directive({
  selector: '[appItemCat]'
})
export class ItemCatDirective {
  @Output() private chargeItemCat:any;
  @HostBinding ('style.background') private background = '#FEFEFE';  
  constructor() { }
  @HostListener('mouseover', ['$event']) public onMouseOver(evt){
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#949290';
  }

  @HostListener('mouseleave', ['$event']) public onMouseLeave(evt){
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#FEFEFE'
  }
}
