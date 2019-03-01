import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultaService {

  endpoint = 'http://localhost:8080/wsrest/api/agente/4/multas';

  constructor(private httpClient: HttpClient) {
    console.debug('MultaService constructor');
   }

   public getMultas(): Observable<any> {
    console.trace('getMultas' + this.endpoint);
    return this.httpClient.get(this.endpoint);
   }
}