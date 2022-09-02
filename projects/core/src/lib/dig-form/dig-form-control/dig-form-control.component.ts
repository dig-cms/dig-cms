import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-dig-form-control',
  templateUrl: './dig-form-control.component.html',
  styleUrls: ['./dig-form-control.component.scss'],
})
export class DigFormControlComponent implements OnInit {
  @Input() control: any;
  @Output() formRegistered: EventEmitter<{formControl: FormControl; props: any}> = new EventEmitter();

  public input!: string;
  public props: any = {};
  public formControl!: FormControl;

  constructor() { }

  ngOnInit() {
    this.input = this.control?.input;
    this.props = this.control?.digProps;
    // todo implement validators
    this.formControl = new FormControl<any>(this.control?.value);
    this.formRegistered.emit({formControl: this.formControl, props: this.control});
  }

}
