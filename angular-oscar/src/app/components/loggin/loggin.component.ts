import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutorizacionService } from 'src/app/providers/autorizacion.service';
import { Router } from '@angular/router';
import { Alert } from 'src/app/model/alert';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.scss']
})
export class LogginComponent implements OnInit {

  formulario: FormGroup;  
  alert: Alert;

  constructor(
    private autorizacionService: AutorizacionService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    console.trace('LogginComponent constructor');
    this.crearFormulario();
    this.alert = new Alert('');
  }

  ngOnInit() {
    console.trace('LogginComponent ngOnInit');
  }
  
  /*esto es un formulario reactivo, para poder crearlo hay que importar FormsModule y ReactiveFormsModule en 
  app.module.ts
  */
  crearFormulario(){
    console.trace('LogginComponent crearFormulario');
    this.formulario = this.formBuilder.group({
      usuario: [
                '',                                                                         
                [Validators.required, Validators.minLength(3), Validators.maxLength(150)]   
              ],
      pass : [
              '',
              [Validators.required, Validators.minLength(3), Validators.maxLength(16)]
      ]  
    });  
      
  }// crearFormulario


  //se hace la comprobacion de los input de los campos del html
  comprobar(){
    console.trace('click boton submit');
    let usuario = this.formulario.controls.usuario.value;
    let pass = this.formulario.controls.pass.value;
    console.debug('usuario: %s password: %s',usuario , pass);

    // llamar servicio Rest, realizar logica dentro de subscripcion
    // Cuidado es una llamada Asincrona
    this.autorizacionService.loggin(usuario, pass).subscribe(
      data =>{
        console.debug('Json Agente %o', data);
        this.autorizacionService.setLogged(true);
        this.autorizacionService.saveAgente(data);
        this.router.navigate(['/principal']);
        //this.router.navigate(['/backoffice']);
      },
      error=>{
        console.warn('error login %o', error);
        this.autorizacionService.setLogged(false);
        this.alert = new Alert('No tienes permisos');
      }
    );

    // *** Cuidado no intentar usar datos de la respuesta aqui ***

  }// comprobar

    
    
    
    /*if ( this.autorizacionService.estaLogeado() ){
      console.info('Login correcto, tenemos permisos');
      this.router.navigate(['/backoffice']);

    }else{
      console.warn('No tienes permisos');
      this.alert = new Alert('No tienes permisos');
    }*/

}// comprobar

