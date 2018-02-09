import { Component } from '@angular/core';
//injectando el servicio
import { InformacionService } from "../../services/informacion.service";
//importar el rauter
import {Router} from "@angular/router"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor( public _is:InformacionService,
               private router:Router){}

  buscar_producto(termino:string)
  {
    //console.log(termino);
    this.router.navigate(['buscar',termino]);
    //navigate redireccionar a search.component.html (nombre de la ruta/id del producto)

  }

}
