import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'dig-form',
  templateUrl: './dig-form.component.html',
  styleUrls: ['./dig-form.component.scss']
})
export class DigFormComponent implements OnInit {
  @Input() state: any;
  @Input() form!: FormGroup;
  @ViewChild('digTemplate') template!: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
