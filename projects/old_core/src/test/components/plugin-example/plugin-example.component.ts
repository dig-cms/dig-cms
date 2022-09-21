import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DigPluginModule } from 'projects/core/src/lib/dig-plugin/dig-plugin.module';

@Component({
  selector: 'dig-plugin-example',
  templateUrl: './plugin-example.component.html',
  standalone: true,
  imports: [CommonModule, DigPluginModule],
  styleUrls: ['./plugin-example.component.scss']
})
export class PluginExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
