import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { MarkdownBlockComponent } from './markdown-block.component';
import { DigPluginModule } from '../dig-plugin/dig-plugin.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MarkdownBlockComponent
  ],
  exports: [
    MarkdownBlockComponent
  ],
  imports: [
    CommonModule,
    DigPluginModule,
    MarkdownModule,
    ReactiveFormsModule
  ]
})
export class MarkdownBlockModule { }
