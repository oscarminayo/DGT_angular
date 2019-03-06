import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogginComponent } from './components/loggin/loggin.component';
import { PrincipalComponent } from './components/principal/principal.component';

import { NavComponent } from './components/nav/nav.component';
import { ListadoMultasComponent } from './components/listado-multas/listado-multas.component';
import { AlertComponent } from './components/alert/alert.component';
import { BackofficeComponent } from './components/backoffice/backoffice.component';
import { FormularioMatriculaComponent } from './components/formulario-matricula/formulario-matricula.component';
import { FormularioMultarComponent } from './components/formulario-multar/formulario-multar.component';

@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    PrincipalComponent,
    FormularioMatriculaComponent,
    NavComponent,
    ListadoMultasComponent,
    AlertComponent,
    BackofficeComponent,
    FormularioMultarComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   // para poder usar doble binding
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
