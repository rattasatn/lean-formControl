import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactInformationComponent } from '../contact-information/contact-information.component';
import { PlanInformationComponent } from '../plan-information/plan-information.component';
import { MoreInfoComponent } from '../more-info/more-info.component';

@NgModule({
  declarations: [
    FormComponent,
    ContactInformationComponent,
    PlanInformationComponent,
    MoreInfoComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [FormComponent],
})
export class FormModule {}
