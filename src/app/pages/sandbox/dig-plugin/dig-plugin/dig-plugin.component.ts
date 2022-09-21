import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dig-plugin',
  templateUrl: './dig-plugin.component.html',
  styleUrls: ['./dig-plugin.component.scss']
})
export class DigPluginComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
