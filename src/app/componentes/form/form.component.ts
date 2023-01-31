import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formRegistroUser!:FormGroup;

  constructor(private frmb: FormBuilder){
    this.formRegistroUser=frmb.group({
      nombre:['',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25)
      ]
      ],
      apellido:['',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25)
      ]
      ],
      email:['',
      [
        Validators.required,
        //Validators.pattern('[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$')
      ]
      ],
      website:['',
      [
        Validators.required,
      ]
      ],
    });
  }


  guardarUsuario(){
    console.log(this.formRegistroUser.value);
  }
}
