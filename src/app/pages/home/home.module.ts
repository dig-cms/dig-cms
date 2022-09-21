import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {MarkdownModule} from 'ngx-markdown';
import {HomePageComponent} from './home-page.component';
import { MarkdownBlockModule } from 'src/app/plugins/markdown-block/markdown-block.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MarkdownModule,
    MarkdownBlockModule
  ]
})
export class HomeModule { }
