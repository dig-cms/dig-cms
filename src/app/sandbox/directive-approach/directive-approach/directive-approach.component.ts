import { Component, OnInit } from '@angular/core';
import {DigService} from '../dig.service';

@Component({
  selector: 'app-directive-approach',
  templateUrl: './directive-approach.component.html',
  styleUrls: ['./directive-approach.component.scss']
})
export class DirectiveApproachComponent implements OnInit {
  public form: any;
  public template: any;
  public doc: any;

  constructor(private dig: DigService) { }

  ngOnInit(): void {
    this.dig.get('about-text').subscribe(console.log);
  }

}
