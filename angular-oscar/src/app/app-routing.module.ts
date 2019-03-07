import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogginComponent } from './components/loggin/loggin.component';
import { PrincipalComponent } from './components/principal/principal.component';

import { NavComponent } from './components/nav/nav.component';
import { ListadoMultasComponent } from './components/listado-multas/listado-multas.component';
import { BackofficeComponent } from './components/backoffice/backoffice.component';

import { PermisosGuard } from './guards/permisos.guard';
import { FormularioMatriculaComponent } from './components/formulario-matricula/formulario-matricula.component';
import { FormularioMultarComponent } from './components/formulario-multar/formulario-multar.component';

const routes: Routes = [
  { path: '', component: LogginComponent },
  { path: 'loggin', component: LogginComponent },
  { path: 'principal', component: PrincipalComponent, canActivate: [PermisosGuard]  },
  { path: 'formularioMatricula', component: FormularioMatriculaComponent, canActivate: [PermisosGuard] },
  { path: 'multar', component: FormularioMultarComponent, canActivate: [PermisosGuard]},
  { path: 'nav', component: NavComponent, canActivate: [PermisosGuard] },
  { path: 'listado', component: ListadoMultasComponent, canActivate: [PermisosGuard] },
  { path: 'backoffice', component: BackofficeComponent, canActivate: [PermisosGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
