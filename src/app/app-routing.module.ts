import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { RouterAsyncComponentComponent } from './components/router-async-component/router-async-component.component';
import { RouterSyncComponentComponent } from './components/router-sync-component/router-sync-component.component';
import { AsyncEnterGuard } from './guards/async-enter.guard';
import { ExitGuardGuard } from './guards/exit-guard.guard';

import { SyncEnterGuard } from './guards/sync-enter.guard';

const routes: Routes = [
  {
    path: '',
    component:MainComponentComponent
  },
  {
    path: 'route-sync',
    component: RouterSyncComponentComponent,
    canDeactivate:[ExitGuardGuard],
    canActivate: [SyncEnterGuard],
    
  },
  {
    path: 'route-async',
    component: RouterAsyncComponentComponent,
    
    canActivate:[AsyncEnterGuard],
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
