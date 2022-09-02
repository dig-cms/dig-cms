import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import {DigFormModule} from './dig-form/dig-form.module';



@NgModule({
  declarations: [
    CoreComponent,
  ],
  imports: [
    DigFormModule,

  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
