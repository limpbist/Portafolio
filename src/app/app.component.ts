import { Component } from '@angular/core';
//importando el servicio
import { InformacionService } from "./services/informacion.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //llamando a la funcion InformacionService de imformacion.service.ts
  constructor( public _is:InformacionService){}

}
