import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'dig-template',
  templateUrl: './dig-template.component.html',
  styleUrls: ['./dig-template.component.scss']
})
export class DigTemplateComponent implements OnInit {
  @Input() state: any;
  @ViewChild('digTemplate') template!: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
