import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'dig-form-text',
  templateUrl: './form-text.component.html',
  styleUrls: ['./form-text.component.scss']
})
export class FormTextComponent implements OnInit {
  @Input() placeholder = '';
  @Input() value = null;
  @Input() formControl!: FormControl;
  @Input() rows = 1;
  @Output() changed: EventEmitter<any> = new EventEmitter<any>();
  @Output() blur: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  get isTextArea() {
    return this.rows > 1;
  }

  ngOnInit(): void {
  }

}
