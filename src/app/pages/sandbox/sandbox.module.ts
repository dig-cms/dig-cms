import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SandboxRoutingModule } from './sandbox-routing.module';
import { SandboxComponent } from './sandbox.component';
import {DigPluginModule} from "./dig-plugin/dig-plugin.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SandboxComponent
  ],
  imports: [
    CommonModule,
    DigPluginModule,
    ReactiveFormsModule,
    SandboxRoutingModule,
    DigPluginModule
  ]
})
export class SandboxModule { }
