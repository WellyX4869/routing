import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent} from './login/login.component';
import { TestComponent } from './test/test.component';
import { Routes, RouterModule } from '@angular/router';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
  const ROUTES: Routes ={
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent}
    {path: 'test', component: TestComponent}
  }  
}
