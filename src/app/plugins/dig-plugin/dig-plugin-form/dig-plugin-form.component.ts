import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dig-plugin-form',
  templateUrl: './dig-plugin-form.component.html',
  styleUrls: ['./dig-plugin-form.component.scss']
})
export class DigPluginFormComponent implements OnInit {
  @ViewChild('template') template: any;
  @Input() formGroup!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  update() {
    this.formGroup.get('text')?.setValue('tester')
  }

}
