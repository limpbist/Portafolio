import { Component } from '@angular/core';

//importando para obtener la url
import { ActivatedRoute } from "@angular/router";
//importando al SERVICIOS
import { ProductosService } from "../../services/productos.service";



@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html',
  styles: []
})
export class PortafolioItemComponent
{
  producto:any = undefined;
  item:string = undefined;
  constructor(private route:ActivatedRoute,
              private _ps: ProductosService)
  {
    route.params.subscribe
    (
      parametros=>
      {
        //console.log( parametros );//obtener el objeto
        //console.log(parametros['id']);//obtener solo el producto
        _ps.cargar_item(parametros['id'])
        .subscribe (items=>
          {
          this.item = parametros['id']//guardando el codigo de la imagen para llamar
          this.producto = items.json();//guardando la informacion en el array
          console.log(this.producto);


          })
      }
    )

  }
}
