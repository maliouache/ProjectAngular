import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {ConnectionService} from './connection.service';



@Injectable()
export class AuthenGuard implements CanActivate {

  constructor( private user: ConnectionService){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | any {
    return this.user.getUserLoggedIn();
  }
}
