import { Component } from '@angular/core';

//importando para obtener la url
import { ActivatedRoute } from "@angular/router";



@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html',
  styles: []
})
export class PortafolioItemComponent
{
  constructor(private route:ActivatedRoute)
  {
    route.params.subscribe
    (
      parametros=>
      {
        console.log( parametros );//obtener el objeto 
        console.log(parametros['id']);//obtener solo el producto
      }
    )

  }
}
