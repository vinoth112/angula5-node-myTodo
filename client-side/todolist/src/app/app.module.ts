import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterialDetailsComponent } from './material-details/material-details.component';
import { MaterialListComponent } from './material-details/material-list/material-list.component';
import { HeaderComponent } from './material-details/header/header.component';
import { MaterialFormComponent } from './material-details/material-details/material-form.component';
import { MaterialService } from './services/materialService';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: MaterialDetailsComponent },
  { path: 'add', component: MaterialFormComponent },
  { path: 'edit', component: MaterialFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MaterialDetailsComponent,
    MaterialListComponent,
    HeaderComponent,
    MaterialFormComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  providers: [ MaterialService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
