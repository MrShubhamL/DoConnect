import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SigninService } from './signin.service';



@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private _signin:SigninService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this._signin.isLoggedIn() &&  this._signin.getUserRole()=="NORMAL"){
        return true
      }
      this.router.navigate(['/']);
      return false;
  }
  
}
