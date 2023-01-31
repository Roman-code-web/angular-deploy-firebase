import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { TablaComponent } from './tabla/tabla.component';



@NgModule({
  declarations: [
    FormComponent,
    TablaComponent
  ],
  imports: [
    CommonModule
  ], exports:[
    FormComponent,
    TablaComponent
  ]
})
export class ComponentesModule { }
