import { Component, OnInit } from '@angular/core';
import { Multa } from 'src/app/model/multa';
import { MultaService } from 'src/app/providers/multa.service';
import { Alert } from 'selenium-webdriver';
import { AutorizacionService } from 'src/app/providers/autorizacion.service';


@Component({
  selector: 'app-listado-multas',
  templateUrl: './listado-multas.component.html',
  styleUrls: ['./listado-multas.component.scss']
})
export class ListadoMultasComponent implements OnInit {

    multas: Multa[];
    agente: any;
    alert: Alert;
    isActiva: boolean;
    multaSeleccionada: Multa;


  constructor(private autorizacionService: AutorizacionService, public multaService:MultaService) { 
    console.log('ListadoMultasComponent constructor');
    this.multas = [];
    this.isActiva = false;
    this.multaSeleccionada = new Multa(-1,0,'','',-1,-1);
  }

  ngOnInit() {
    console.log('ListadoMultasComponent ngOnInit');
    
    this.getAgenteInfo();
    this.getMultas(this.agente);
  }

  getAgenteInfo(){
    this.agente = this.autorizacionService.getAgente();

  }

  getMultas(id: number) {
    console.log('TodosComponent getAllByUser');
    this.multas = [];
    this.multaService.listarMultas(this.agente.id).subscribe(resultado => {
      console.debug('peticion correcta %o', resultado);

      this.isActiva = true;
      this.multas = resultado;
    },
      error => {
        console.warn('peticion incorrecta %o', error);
      }
    );//subscribe   
  }//getMultas

}
