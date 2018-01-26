import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent{
/*PARA CAMBIAR AÑO POR SISTEMA*/
  anio:number = new Date().getFullYear();



}
