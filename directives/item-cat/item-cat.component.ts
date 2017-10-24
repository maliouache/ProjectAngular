import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-cat',
  templateUrl: './item-cat.component.html',
  styleUrls: ['./item-cat.component.css']
})
export class ItemCatComponent implements OnInit {
  @Input() private itemComp:any;
  constructor() { 
    
  }

  ngOnInit() {
  }

}
