import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogginComponent } from './components/loggin/loggin.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { BuscarMatriculaComponent } from './components/buscar-matricula/buscar-matricula.component';
import { NavComponent } from './components/nav/nav.component';
import { ListadoMultasComponent } from './components/listado-multas/listado-multas.component';
import { AlertComponent } from './components/alert/alert.component';
import { BackofficeComponent } from './components/backoffice/backoffice.component';

@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    PrincipalComponent,
    BuscarMatriculaComponent,
    NavComponent,
    ListadoMultasComponent,
    AlertComponent,
    BackofficeComponent    
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
