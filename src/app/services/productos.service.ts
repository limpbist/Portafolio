import { Injectable } from '@angular/core';
//importando Http para hacer peticiones
import { Http } from '@angular/http';

@Injectable()
export class ProductosService
{
  productos:any[]=[];
  cargando:boolean=true;
  
  constructor(private http:Http)
  {
    this.cargar_productos();

  }



  public cargar_item(cod:string)
  {
    return this.http.get('https://about-2ad57.firebaseio.com/productos/'+cod+'.json');
    //retornar el item seleccionado {cod} llama al id del item
  }

  public cargar_productos()
  {
    this.cargando =true;
    if(this.productos.length===0)
    {
      this.http.get("https://about-2ad57.firebaseio.com/producto_idx.json")
      .subscribe(res=>{
        //console.log(res.json());
        //setTimeout funcion para ver la animacion cargando en el portafolio.component.html
        //setTimeout(()=>
        //{
          this.cargando = false;
          this.productos=res.json();

        //},1500)

      })
    }
  }

}
