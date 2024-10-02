// src/app/models/personal-info.model.ts

import { PlanType } from "./app/PlanType.enum";

export class PersonalInfo {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    plan: PlanType;             
    checkboxSwitch: boolean;

   
}
