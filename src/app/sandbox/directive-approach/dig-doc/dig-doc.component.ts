import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-dig-doc',
  templateUrl: './dig-doc.component.html',
  styleUrls: ['./dig-doc.component.scss']
})
export class DigDocComponent implements OnInit {
  @Input() template!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
