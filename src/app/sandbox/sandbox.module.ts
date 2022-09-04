import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SandboxComponent} from './sandbox.component';
import {DirectiveApproachModule} from './directive-approach/directive-approach.module';
import {WrapperComponentModule} from './wrapper-component/wrapper-component.module';



@NgModule({
  declarations: [SandboxComponent],
  exports: [SandboxComponent],
  imports: [
    CommonModule,
    DirectiveApproachModule,
    WrapperComponentModule
  ]
})
export class SandboxModule { }
