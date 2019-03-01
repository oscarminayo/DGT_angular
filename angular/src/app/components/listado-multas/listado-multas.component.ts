import { Component, OnInit } from '@angular/core';
import { Multa } from 'src/app/model/multa';
import { MultaService } from 'src/app/providers/multa.service';


@Component({
  selector: 'app-listado-multas',
  templateUrl: './listado-multas.component.html',
  styleUrls: ['./listado-multas.component.scss']
})
export class ListadoMultasComponent implements OnInit {

    multas: Multa[];


  constructor(private multaService: MultaService) { 
    console.trace("constructor ListadoMultasComponent");
    this.multas = [];
  }

  ngOnInit() {
    console.trace('ListadoMultasComponent ngOnInit');
    //realizar llamada al servicio
    this.multaService.getMultas().subscribe(json =>{
      console.debug("recibimos datos json %o", json);
      
      this.multas = json;
      //Map de personasJson
      /*this.multas = json.map(m =>{
        return new Multa(m.id, m.matricula, m.concepto, m.importe, m.fecha_alta, m.fecha_baja,
           m.fecha_modificacion);
      });*/

    });


  }

}
