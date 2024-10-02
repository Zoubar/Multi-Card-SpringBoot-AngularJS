import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from './form.service';
import { PersonalInfo } from 'src/PersonalInfo.model'; 
import { PersonalInfoService } from '../personal-info.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  currentStep: number = 1;
  form: FormGroup;
  subscriptionSucceeded: boolean = false;

  constructor(
    public formservice: FormService, 
    private fb: FormBuilder, 
    private personalInfoService: PersonalInfoService
  ) {}

  ngOnInit(): void {
    this.initForm();  // Initialize the form when the component is created
  }

  initForm() {
    this.form = this.fb.group({
      personalInfoForm: this.fb.group({
        name: [null, [Validators.required, Validators.minLength(4)]],
        email: [null, [Validators.email, Validators.required]],
        phoneNumber: [null, Validators.required],
      }),
      plansForm: this.fb.group({
        plan: [null, Validators.required],
        checkboxSwitch: [true],  // Default to yearly billing
      }),
      onsForm: this.fb.group({
        'Online Service': [null],
        'Larger storage': [null],
        'Customizable profile': [null],
      }),
      step2Form: this.fb.group({  // New form group for Step 2
        address: [null, Validators.required],
        city: [null, Validators.required],
        zipCode: [null, Validators.required],
      }),
    });
  }

  onConfirm() {
    console.log(this.form.value);
    this.subscriptionSucceeded = !this.subscriptionSucceeded;
  }

  onPlanSelected(plan: string) {
    console.log('Selected Plan:', plan);  // You can process the plan selection here if needed
  }

  onNext() {
    if (this.currentStep === 1) {
      if (this.form.get('personalInfoForm')?.valid) {
        console.log('Personal Info is valid. Proceeding to next step...');
        this.currentStep++; // Move to step 2
      } else {
        console.log('Personal Info form is invalid');
      }
    } else if (this.currentStep === 2) {
      if (this.form.get('plansForm')?.valid) {
        console.log('Plans form is valid. Submitting Personal Info and Plan...');
        
        // Combine personal info and plan form data
        const personalInfo: PersonalInfo = {
          ...this.form.value.personalInfoForm,   // Step 1 data (name, email, phone)
          plan: this.form.value.plansForm.plan.toUpperCase(),  // Convert to uppercase
          checkboxSwitch: this.form.value.plansForm.checkboxSwitch // Whether yearly/monthly plan
        };
  
        // Submit the combined data
        this.personalInfoService.createPersonalInfo(personalInfo).subscribe(
          (response) => {
            console.log('Data submitted:', response);
            this.currentStep++; 
          },
          (error) => {
            console.error('Error submitting data:', error);
          }
        );
      } else {
        console.log('Plans form is invalid');
      }
    } else if (this.currentStep < 4) {
      this.currentStep++; 
    } else {
      this.onConfirm(); // Final confirmation on Step 4
    }
  }
  
  onBack() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}
