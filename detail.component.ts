import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { DetailService} from './detail.service';

@Component({
 selector: "details",
 templateUrl: "./detail.component.html"
})
export class DetailComponent implements OnInit {
      
      private detailsProduct : Object[];
      constructor(private detail : DetailService, private route : ActivatedRoute){}
      ngOnInit(){
                this.route.params.subscribe((params:Params)=>{
                     this.detail.getDetails("Detail/"+params.id).subscribe(res => {this.detailsProduct = res;});
                }); 
     }
 }
