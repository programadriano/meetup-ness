import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';


import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../share/material/material.module';
import { LoginService } from './services/login.service';
import { HttpUtilService } from '../share/services/http-util-service';

@NgModule({
  imports: [CommonModule, LoginRoutingModule, MaterialModule, HttpModule],
  providers: [LoginService, HttpUtilService],
  declarations: [LoginComponent]
})
export class LoginModule {}
