import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RouterSyncComponentComponent } from '../components/router-sync-component/router-sync-component.component';

@Injectable({
  providedIn: 'root'
})
export class ExitGuardGuard implements CanDeactivate<RouterSyncComponentComponent> {
  canDeactivate(
    component: RouterSyncComponentComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ){
    if (component.canExit){ return window.confirm(
        'Unsaved data detected. Want to exit?'
      )} else {return true}
  }  
}
