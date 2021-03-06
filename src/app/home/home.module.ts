import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormComponent } from './form/form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [HomeComponent, FormComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class HomeModule { }
