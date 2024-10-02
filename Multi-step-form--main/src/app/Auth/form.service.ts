import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  onsForm: FormGroup;
  personalInfoForm: FormGroup;
  plansForm: FormGroup;
  plansData = [
    {
      icon: '../../../assets/images/icon-arcade.svg',
      plan: 'Arcade',
      monthlySubCost: 9,
      yearlySubCost: 90,
      yearlySubBenifits: '2 months free',
    },
    {
      icon: '../../../assets/images/icon-advanced.svg',
      plan: 'Advanced',
      monthlySubCost: 12,
      yearlySubCost: 120,
      yearlySubBenifits: '2 months free',
    },
    {
      icon: '../../../assets/images/icon-pro.svg',
      plan: 'Pro',
      monthlySubCost: 15,
      yearlySubCost: 150,
      yearlySubBenifits: '2 months free',
    },
  ];
  stepsData = [
    {
      stepTitle: 'your info',
      heading: 'Personal info',
      instruction: 'please provide your name, email address, and phone number.',
    },
    {
      stepTitle: 'select plan',
      heading: 'Select your plan',
      instruction: 'you have the option of monthly or yearly billing.',
    },
    {
      stepTitle: 'add-ons',
      heading: 'Pick add-ons',
      instruction: 'add-ons help enhance your gaming experience.',
    },
    {
      stepTitle: 'summury',
      heading: 'Finishing up',
      instruction: 'Double-check everything looks OK before confirming.',
    },
  ];
  onsData = [
    {
      optionName: 'Online Service',
      optionDescription: 'Access to multiplayer games',
      additionalMonthlyFees: 1,
      additionalYearlyFees: 10,
    },
    {
      optionName: 'Larger storage',
      optionDescription: 'Extra 1TB of cloud save',
      additionalMonthlyFees: 2,
      additionalYearlyFees: 20,
    },
    {
      optionName: 'Customizable profile',
      optionDescription: 'Custom theme on your profile',
      additionalMonthlyFees: 2,
      additionalYearlyFees: 20,
    },
  ];
  constructor() {}
}
