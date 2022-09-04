import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveApproachComponent } from './directive-approach/directive-approach.component';
import { DigDirective } from './directives/dig.directive';
import { TextComponent } from './text/text.component';
import { DigFormGroupDirective } from './dig-form-group.directive';
import { DigPageComponent } from './dig-page/dig-page.component';
import { DigIdDirective } from './directives/dig-id.directive';
import { PostComponent } from './post/post.component';
import { DigFormDirective } from './directives/dig-form.directive';
import { DigTemplateDirective } from './directives/dig-template.directive';
import { DigDocDirective } from './directives/dig-doc.directive';
import { DigDocComponent } from './dig-doc/dig-doc.component';



@NgModule({
  declarations: [
    DirectiveApproachComponent,
    DigDirective,
    TextComponent,
    DigFormGroupDirective,
    DigPageComponent,
    DigIdDirective,
    PostComponent,
    DigFormDirective,
    DigTemplateDirective,
    DigDocDirective,
    DigDocComponent
  ],
  exports: [
    DirectiveApproachComponent,
    DigDirective,
    TextComponent,
    DigFormGroupDirective,
    DigPageComponent,
    DigIdDirective,
    PostComponent,
    DigFormDirective,
    DigTemplateDirective,
    DigDocDirective,
    DigDocComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DirectiveApproachModule { }
