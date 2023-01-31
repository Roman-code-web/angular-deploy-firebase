import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formRegistroUser!:FormGroup;
  mensajeError={
    nombre:'',
    apellido:'',
    email:'',
    website:''
  }


  constructor(private frmb: FormBuilder, private usuarioservice:UsuarioService , private router: Router){
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
        Validators.pattern('^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$')
      ]
      ],
      email:['',
      [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ]
      ],
      website:['',
      [
        Validators.required,
      ]
      ],
    });
  }


 async guardarUsuario(){
  try {
    let res=this.usuarioservice.agregarUsuario(this.formRegistroUser.value);
    if(await res){
      Swal.fire({
        icon: 'success',
        title: 'Usuario registrado',
      })
    }
    this.formRegistroUser.reset();
    this.router.navigate(['/']);
  } catch (error) {
    console.log(error);
  }
  }

  //validacion formulario
validacion(name: string) {
  if(this.formRegistroUser.get(name)?.errors && (this.formRegistroUser.get(name)?.touched || this.formRegistroUser.get(name)?.dirty)){
    if(this.formRegistroUser.get(name)?.errors?.['required']){
      if(name=='nombre'){
        this.mensajeError.nombre="el campo es requerido"; 
      }else if (name=='apellido'){
        this.mensajeError.apellido="El campo es requerido";
      }else if(name=='email'){
        this.mensajeError.email="El campo es requerido";
      }else{
        this.mensajeError.website="El campo es requerido";
      } 
      
    }else if(this.formRegistroUser.get(name)?.errors?.['minlength']){
      if(name=='nombre'){
        this.mensajeError.nombre="Mínimo de caracteres 3"; 
      }

    }else if(this.formRegistroUser.get(name)?.errors?.['maxlength']){
      if(name=='nombre'){
        this.mensajeError.nombre="Máximo de caracteres 25"; 
      }
    }else if(this.formRegistroUser.get(name)?.errors?.['pattern']){
      if(name=='email'){
        this.mensajeError.email="Email Inválido";
      }else{
        this.mensajeError.apellido="Escribe tus 2 apellidos";
      }
      
    }
  }
  return this.formRegistroUser.get(name)?.errors && (this.formRegistroUser.get(name)?.touched || this.formRegistroUser.get(name)?.dirty);
}

}
