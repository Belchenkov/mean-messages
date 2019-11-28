import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material.module';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    AngularMaterialModule,
    FormsModule
  ]
})
export class AuthModule {}
