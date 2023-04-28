import { Injectable } from '@angular/core';
import { menu } from './modelo/menu';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  menuItems:menu[] =  [
     new menu("examenes","dvr","examen") ,
     new menu("buscar","search","buscar") ,
     new menu("especialidades","language","especialidades") ,
     new menu("medicos"," person_pin","medicos") ,
     new menu("pacientes","people","pacientes") ,
     new menu("regitrar","laptop","regitrar") ,
     new menu("registrar-e","laptop","registrar-e") ,
     new menu("registrar-w","laptop","registrar-w") ,
     new menu("reportes","report","reportes") ,

  ];
  constructor() { }
}
