import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SandboxRoutingModule } from './sandbox-routing.module';
import { SandboxComponent } from './sandbox.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DigModule} from 'core';


@NgModule({
  declarations: [
    SandboxComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SandboxRoutingModule,
    DigModule
  ]
})
export class SandboxModule { }
