import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { HomeFacebookPostComponent } from './components/home-facebook-post/home-facebook-post.component';


@NgModule({
  declarations: [HomeMainComponent, HomeFacebookPostComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
