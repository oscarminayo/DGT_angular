import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogginComponent } from './components/loggin/loggin.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { BuscarMatriculaComponent } from './components/buscar-matricula/buscar-matricula.component';
import { NavComponent } from './components/nav/nav.component';
import { ListadoMultasComponent } from './components/listado-multas/listado-multas.component';
import { BackofficeComponent } from './components/backoffice/backoffice.component';

import { PermisosGuard } from './guards/permisos.guard';

const routes: Routes = [
  { path: '', component: LogginComponent },
  { path: 'loggin', component: LogginComponent },
  { path: 'principal', component: PrincipalComponent, canActivate: [PermisosGuard]  },
  { path: 'buscarMatricula', component: BuscarMatriculaComponent },
  { path: 'nav', component: NavComponent },
  { path: 'listado', component: ListadoMultasComponent },
  { path: 'backoffice', component: BackofficeComponent, canActivate: [PermisosGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
