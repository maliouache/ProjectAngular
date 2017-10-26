import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ApplicationFormService {
           
       constructor(private http : Http){}
       
       getUser(parametres : String) : Observable<any> {
          let url = "http://localhost:8888/Users/"+parametres;
          let observable: Observable<any> = this.http.get(url).map((res:Response) => res.json());
          return observable;
       }
       
    }  

 
           