import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'dig-doc',
  templateUrl: './dig-doc.component.html',
  styleUrls: ['./dig-doc.component.scss']
})
export class DigDocComponent implements OnInit {
  @ViewChild('digTemplate') template!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
