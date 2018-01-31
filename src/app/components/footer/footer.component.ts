import { Component, OnInit } from '@angular/core';
//importar InformacionService para utilizar el objeto json
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent{
/*PARA CAMBIAR AÑO POR SISTEMA*/
  anio:number = new Date().getFullYear();
//creando el constructor para llamar
constructor(public _is:InformacionService ){}

}
