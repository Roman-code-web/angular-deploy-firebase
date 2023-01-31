import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { TablaComponent } from './tabla/tabla.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ], exports:[
    FormComponent,
    TablaComponent
  ]
})
export class ComponentesModule { }
