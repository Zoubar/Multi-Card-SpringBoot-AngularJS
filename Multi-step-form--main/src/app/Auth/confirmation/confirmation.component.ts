import { Component, Input } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styles: [
    `
      :host {
        height: 30rem;
        width: 100%;
      }
    `,
  ],
})
export class ConfirmationComponent {
  @Input() summary: any = {};
  onsData: any = [];
  arcadeCost: number;
  proCost: number;
  advancedCost: number;
  planCost: number;
  onsTotalCost: number;
  totalCost: number;

  constructor(public formService: FormService) {}

  ngOnChanges(): void {
    this.singlePlanCost();
    this.chosenPlanCost();
    this.pushToArr();
    this.totalCost = this.planCost + this.onsTotalCost;
  }

  chosenPlanCost() {
    if (this.summary.plansForm.plan === 'Arcade') {
      this.planCost = this.arcadeCost;
    }
    if (this.summary.plansForm.plan === 'Advanced') {
      this.planCost = this.advancedCost;
    }
    if (this.summary.plansForm.plan === 'Pro') {
      this.planCost = this.proCost;
    }
  }

  singlePlanCost() {
    if (
      this.summary.plansForm.plan === 'Arcade' &&
      !this.summary.plansForm.checkboxSwitch
    ) {
      this.arcadeCost = 90;
    } else {
      this.arcadeCost = 9;
    }
    if (
      this.summary.plansForm.plan === 'Pro' &&
      !this.summary.plansForm.checkboxSwitch
    ) {
      this.proCost = 150;
    } else {
      this.proCost = 15;
    }
    if (
      this.summary.plansForm.plan === 'Advanced' &&
      !this.summary.plansForm.checkboxSwitch
    ) {
      this.advancedCost = 120;
    } else {
      this.advancedCost = 12;
    }
  }

  pushToArr() {
    this.formService.onsData.forEach((item) => {
      const itemKey = Object.keys(this.summary.onsForm).find(
        (x) => x === item.optionName
      );
      if (item.optionName == itemKey && this.summary.onsForm[itemKey]) {
        this.onsData.push(item);
      }
    });

    this.onsData = this.onsData.map((item: any) => ({
      value: this.summary.plansForm.checkboxSwitch
        ? '+$' + item.additionalMonthlyFees + '/mo'
        : '+$' + item.additionalYearlyFees + '/yr',
      optionName: item.optionName,
      rawValue: this.summary.plansForm.checkboxSwitch
        ? item.additionalMonthlyFees
        : item.additionalYearlyFees,
    }));
    this.onsTotalCost = this.onsData.reduce(
      (acc: number, o: any) => acc + parseInt(o.rawValue),
      0
    );
  }
}
