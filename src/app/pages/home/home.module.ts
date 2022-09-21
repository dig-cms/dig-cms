import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {MarkdownModule} from 'ngx-markdown';
import {HomePageComponent} from './home-page.component';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MarkdownModule,
  ]
})
export class HomeModule { }
