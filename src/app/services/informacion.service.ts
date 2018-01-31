import { Injectable } from '@angular/core';

//importando Http
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {

  info:any = {};
  cargada:boolean = false;

  constructor( public http:Http )
  {
    this.http.get("assets/data/infopagina.json")
    .subscribe(data=>{
      console.log(data.json());
      this.cargada= true;
      this.info=data.json();
    })
    //data.json() solo el archivo json
   }

}
