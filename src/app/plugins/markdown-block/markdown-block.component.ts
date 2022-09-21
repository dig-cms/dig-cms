import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface MarkdownData {
  text: string
};

@Component({
  selector: 'app-markdown-block',
  templateUrl: './markdown-block.component.html',
  styleUrls: ['./markdown-block.component.scss']
})
export class MarkdownBlockComponent implements OnInit {
  public form = new FormGroup({
    text: new FormControl()
  });

  get data() {
    return this.form.value;
  }

  constructor() { }

  ngOnInit(): void {
    // this.form.valueChanges.subscribe((v: MarkdownData) => this.data.se\);
  }

}
