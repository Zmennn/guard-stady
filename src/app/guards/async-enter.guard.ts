import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsyncEnterGuard implements CanActivate {

  getAsync():Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true)
        
    },3000)
  })
}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.getAsync();
  }
  
}
