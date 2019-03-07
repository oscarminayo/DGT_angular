import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from 'src/app/providers/autorizacion.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  private autorizacionService: AutorizacionService
  
  constructor() { 
    
  }

  ngOnInit() {
  }

}
