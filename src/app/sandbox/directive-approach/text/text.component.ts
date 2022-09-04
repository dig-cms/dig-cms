import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  public readonly form = new FormGroup({
    text: new FormControl()
  });

  @Input() text!: string;

  constructor() { }

  ngOnInit(): void {
  }
}
