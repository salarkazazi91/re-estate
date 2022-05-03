import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

 
@NgModule({
  declarations: [],
  imports: [
    HomeRoutingModule,
    CommonModule
  ], 
})
export class HomeModule { }
