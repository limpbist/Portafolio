import { Injectable } from '@angular/core';

//importando Http
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {

  info:any = {};
  cargada:boolean = false;
  cargada_sobre_nosotros:boolean = false;
  equipo:any[] = [];

  constructor( public http:Http ){
    this.carga_info();
    this.carga_sobre_nosotros();
  }
   public carga_info(){
     this.http.get("assets/data/infopagina.json")
     .subscribe(data=>{
        //console.log(data.json());
       this.cargada= true;
       this.info=data.json();
     })
     //data.json() solo el archivo json
   }
   public carga_sobre_nosotros(){
     this.http.get("https://about-2ad57.firebaseio.com/Nosotros.json")
     .subscribe(data=>{
       //console.log(data.json());
       this.cargada_sobre_nosotros= true;
       this.equipo=data.json();
     });
   };
}
