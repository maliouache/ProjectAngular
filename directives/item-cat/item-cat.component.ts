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

  showDetails(){
    let html:String='<div id="'+this.itemComp._id+'" style="display:block;"><b>Brand :</b> '+this.itemComp.brand+'<br/><b>Name :</b> '+this.itemComp.name+'<br/><b>Price :</b> '+this.itemComp.price+' $<br/><b>Description :</b> '+this.itemComp.description+'<br/></div>';
    let id=document.getElementById(this.itemComp.category);
    console.log(id);
    id.innerHTML=""+html;
  }

}
