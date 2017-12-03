import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { DetailService} from './detail.service';

@Component({
 selector: "detail",
 templateUrl: "./detail.component.html"
})
export class DetailComponent implements OnInit {
      
      private itemComp : Object[];
      constructor(private detail : DetailService, private route : ActivatedRoute){}
      ngOnInit(){
                this.route.params.subscribe((params:Params)=>{
                     this.detail.getDetails("Detail/"+params.id).subscribe(res => {this.itemComp = res;});
                }); 
     }
 }
