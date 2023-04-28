import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './buscar/buscar.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { ExamenesComponent } from './examenes/examenes.component';
import { InicioComponent } from './inicio/inicio.component';
import { MedicosComponent } from './medicos/medicos.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { RegistrarEComponent } from './registrar-e/registrar-e.component';
import { RegistrarWComponent } from './registrar-w/registrar-w.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ResgistrarComponent } from './registrar/resgistrar.component';


const routes: Routes = [
  {path: 'buscar', component: BuscarComponent },
  {path: 'especialidades', component: EspecialidadesComponent },
  {path: 'examen', component: ExamenesComponent },
  {path: '', component: InicioComponent },
  {path: 'medicos', component: MedicosComponent },
  {path: 'pacientes', component: PacientesComponent },
  {path: 'registrar', component: ResgistrarComponent },
  {path: 'registrar-e', component: RegistrarEComponent },
  {path: 'registrar-w', component: RegistrarWComponent },
  {path: 'reportes', component: ReportesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
