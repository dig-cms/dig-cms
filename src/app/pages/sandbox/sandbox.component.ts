import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {of} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {
  public readonly form = new FormGroup({
    name: new FormControl('Forrest')
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
