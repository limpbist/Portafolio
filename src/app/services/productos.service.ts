import { Injectable } from '@angular/core';
//importando Http para hacer peticiones
import { Http } from '@angular/http';

@Injectable()
export class ProductosService
{
  productos:any[]=[];
  puductos_filtado:any[]=[];//AGREGAR UN ARRAY PARA SEARCH
  cargando:boolean=true;

  constructor(private http:Http)
  {
    this.cargar_productos();

  }


  public buscar_producto(termino:string)
  {
    //console.log("BUSCANDO PRODUCTO");
    //console.log(this.productos.length);
    if(this.productos.length===0)
    {
      this.cargar_productos().then(()=>{
        //termino la carga
        this.filtar_productos(termino)
      });
    }else
    {
      this.filtar_productos(termino);
    }


  }
  private filtar_productos(termino:string)
  {
    this.puductos_filtado=[];
    termino = termino.toLowerCase();
    //logica


    this.productos.forEach(prod=>{
      //filtrando
      if(prod.categoria.indexOf(termino)>=0 || prod.titulo.toLowerCase().indexOf(termino)>=0)
      {
        this.puductos_filtado.push(prod);
      }
      //console.log(prod);
    })
  }


  public cargar_item(cod:string)
  {
    return this.http.get('https://about-2ad57.firebaseio.com/productos/'+cod+'.json');
    //retornar el item seleccionado {cod} llama al id del item
  }





  public cargar_productos(){

    this.cargando =true;
    //promesa
    let promesa = new Promise(( resolve,reject)=>{

    this.http.get("https://about-2ad57.firebaseio.com/producto_idx.json")
    .subscribe(res=>{
      //console.log(res.json());
      //setTimeout funcion para ver la animacion cargando en el portafolio.component.html
      //setTimeout(()=>
      //{
        this.cargando = false;
        this.productos=res.json();
        resolve();

      //},1500)

      });
    });
    return promesa;
  }
}
