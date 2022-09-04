import {Component, ContentChild, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dig',
  templateUrl: './dig.component.html',
  styleUrls: ['./dig.component.scss']
})
export class DigComponent implements OnInit {
  @Input() path!: string;
  @Input() scope!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
