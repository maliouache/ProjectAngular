import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list-cat',
  templateUrl: './item-list-cat.component.html',
  styleUrls: ['./item-list-cat.component.css']
})
export class ItemListCatComponent implements OnInit {
  private itemList:any=[{"name":"iphone","price":329},{"name":"samsung","price":409},{"name":"iphone","price":329},{"name":"iphone","price":329}];
  constructor() { }

  ngOnInit() {
  }

  onItemsChange(itemList:Array<any>){
    this.itemList=itemList;
  }
}
