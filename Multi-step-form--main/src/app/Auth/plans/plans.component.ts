import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormService } from '../form.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styles: [
    `
      :host {
        height: 30rem;
        width: 100%;
      }
    `,
  ],
})
export class PlansComponent implements OnInit {
  @Input() form: FormGroup;

  constructor(public formservice: FormService) {}

  ngOnInit(): void {}
}
