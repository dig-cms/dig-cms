import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-wrapped',
  templateUrl: './wrapped.component.html',
  styleUrls: ['./wrapped.component.scss']
})
export class WrappedComponent implements OnInit {
  public form = new FormGroup({
    name: new FormControl()
  })
  constructor() { }

  ngOnInit(): void {
  }

}
