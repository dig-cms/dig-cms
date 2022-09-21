import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dig-form',
  templateUrl: './dig-form.component.html',
  styleUrls: ['./dig-form.component.scss'],
})
export class DigFormComponent implements OnInit {
  @Input() controls!: any[];

  public form = new FormGroup({});

  constructor() { }

  ngOnInit() {
    this.form.valueChanges.subscribe(console.log);
  }

  //TODO type this event
  registerControl(ev: any) {
    const {formControl, props} = ev;
    this.form.addControl(props.input, formControl);
    this.form.updateValueAndValidity();
  }

}
