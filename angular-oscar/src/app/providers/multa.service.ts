import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutorizacionService } from './autorizacion.service';
import { Coche } from '../model/coche';
import { Multa } from '../model/multa';

@Injectable({
  providedIn: 'root'
})
export class MultaService {
  private storage = window.sessionStorage;
  //endpoint = 'http://localhost:8080/wsrest-oscar/api/agente/4/multas';

  constructor(private httpClient: HttpClient, private autorizacionService: AutorizacionService) {
    console.debug('MultaService constructor');
   }

   listarMultas(id: number): Observable<any>{
    //localhost para desarrollo en local y la IP del ordenador de produccion para produccion
    //let uri = `http://localhost:8080/wsrest-oscar/api/agente/${id}/multas`;
    let uri = `http://192.168.0.12:8080/wsrest-oscar/api/agente/${id}/multas`;
      console.trace('MultaService listarMultas uri: '+ uri);

      return this.httpClient.get(uri);

  }

   

   public saveCoche( coche: Coche){
    this.storage.setItem('cocheMulta', JSON.stringify(coche));
  }

  public getCocheSession(): Coche {
    console.debug('cocheMulta: %o', this.storage.getItem('cocheMulta'));
    if(this.storage.getItem('cocheMulta')){
      return JSON.parse(this.storage.getItem('cocheMulta'));
    }else{
      return undefined;
    }
   }

   buscarMatricula(matricula: string): Observable<any>{
    //localhost para desarrollo en local y la IP del ordenador de produccion para produccion
    //let uri = `http://localhost:8080/wsrest-oscar/api/agente/${matricula}`;
    let uri = `http://192.168.0.12:8080/wsrest-oscar/api/agente/${matricula}`;

    console.trace('MultaService buscarMatricula uri: '+ uri);

    return this.httpClient.get(uri);
  }

  public guardarCoche( coche: any ){
    this.storage.setItem('coche',  JSON.stringify(coche)); 
  }

  public getCoche(): any{

    let cocheString = this.storage.getItem('coche');
    if( cocheString ){    
      return JSON.parse(cocheString);
    }else{
      return undefined;
    }  

  }

  public multar (multa: Multa): Observable<any> {
    //localhost para desarrollo en local y la IP del ordenador de produccion para produccion
    //let url = `http://localhost:8080/wsrest-oscar/api/multa/`;
    let url = `http://192.168.0.12:8080/wsrest-oscar/api/multa/`;
    console.trace('MultaService multar uri:  '+ url);
    
    let body = {
      "importe": multa.importe,
     "concepto": multa.concepto,
      "id_agente": this.autorizacionService.getAgente().id,
      "id_coche": this.getCoche().id,
        
    };
    return this.httpClient.post(url, body);
  } 
}