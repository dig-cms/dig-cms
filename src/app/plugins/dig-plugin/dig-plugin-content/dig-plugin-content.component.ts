import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dig-plugin-content',
  templateUrl: './dig-plugin-content.component.html',
  styleUrls: ['./dig-plugin-content.component.scss']
})
export class DigPluginContentComponent implements OnInit {
  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
