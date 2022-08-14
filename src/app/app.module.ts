import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterAsyncComponentComponent } from './components/router-async-component/router-async-component.component';
import { RouterSyncComponentComponent } from './components/router-sync-component/router-sync-component.component';
import { MainComponentComponent } from './components/main-component/main-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RouterAsyncComponentComponent,
    RouterSyncComponentComponent,
    MainComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
