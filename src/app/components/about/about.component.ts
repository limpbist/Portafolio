import { Component } from '@angular/core';
//inyectando el servicio
import { InformacionService }  from "../../services/informacion.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {

  constructor(public _is:InformacionService){}

}
