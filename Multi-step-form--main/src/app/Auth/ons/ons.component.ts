import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-ons',
  templateUrl: './ons.component.html',
  styles: [
    `
      :host {
        height: 30rem;
        width: 100%;
      }
    `,
  ],
})
export class OnsComponent implements OnInit {
  @Input() form: FormGroup;
  onsForm: FormGroup;

  constructor(public formservice: FormService) {}
  ngOnInit() {}
}
