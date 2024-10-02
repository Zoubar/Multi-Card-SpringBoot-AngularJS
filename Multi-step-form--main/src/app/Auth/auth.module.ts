import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { AuthRoutes } from './auth.routing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { PlansComponent } from './plans/plans.component';
import { OnsComponent } from './ons/ons.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AuthComponent,
    PersonalInfoComponent,
    PlansComponent,
    OnsComponent,
    ConfirmationComponent,
    SuccessComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes),
    MatSidenavModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AuthModule {}
