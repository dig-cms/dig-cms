import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'dig-plugin-form',
  templateUrl: './dig-plugin-form.component.html',
  styleUrls: ['./dig-plugin-form.component.scss']
})
export class DigPluginFormComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
