import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DigFormDirective} from '../../lib/dig-directive/dig-form.directive';

@Component({
  selector: 'dig-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements AfterViewInit {
  public readonly form = new FormGroup({
    text: new FormControl(),
    format: new FormControl('p')
  })
  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.form.valueChanges.subscribe(({format, text}) => this.setElement(format, text));
    this.form.setValue({text: 'test me', format: 'h1'})
  }

  setElement(format: string | null | undefined, text: string | null | undefined) {
    this.el.nativeElement.innerHTML = `<${format}>${text}</${format}>`
  }

}
