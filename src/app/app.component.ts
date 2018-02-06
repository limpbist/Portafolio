import { Component } from '@angular/core';
//importando el servicio
import { InformacionService } from "./services/informacion.service";
import { ProductosService }  from "./services/productos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //llamando a la funcion InformacionService de imformacion.service.ts
    //llamando a la funcion ProductoService de productos.service.ts
  constructor( public _is:InformacionService,
               public _ps:ProductosService){}

}
