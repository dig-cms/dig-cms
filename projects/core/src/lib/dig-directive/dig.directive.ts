import {
  AfterContentInit,
  AfterViewInit,
  Directive,
  HostBinding, HostListener,
  Input,
  OnInit,
  ViewRef
} from '@angular/core';
import {DigService} from '../dig-service/dig.service';
import {digComponent} from '../dig';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[dig]'
})
export class DigDirective implements AfterViewInit{
  // todo figure out the type here
  @Input() dig!: any;
  @Input() uid!: string;

  constructor(private digService: DigService) {
  }

  // todo type this button
  @HostListener('click', ['$event.target'])
  onClick() {
    this.handleClick();
  }

  ngAfterViewInit(): void {
    this.digService.setControl(this.uid, digComponent(this.dig));
  }

  handleClick() {
    this.digService.openForm(this.uid);
  }

}
