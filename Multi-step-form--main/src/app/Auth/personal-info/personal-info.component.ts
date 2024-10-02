import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styles: [
    `
      :host {
        height: 30rem;
        width: 100%;
      }
    `,
  ],
})
export class PersonalInfoComponent implements OnInit {
  personalInfoForm: FormGroup;
  @Input() form: FormGroup;

  constructor() {}

  ngOnInit() {}

  
}
