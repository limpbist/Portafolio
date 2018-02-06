import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//http
import { HttpModule } from '@angular/http';

//RUTAS-importadas desde app.routes.ts
import { app_routing } from "./app.routes";

//SERVICIOS
import { InformacionService } from "./services/informacion.service";//importando
import { ProductosService } from "./services/productos.service";//importando
//COMPONENTES
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { PortafolioItemComponent } from './components/portafolio-item/portafolio-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    PortafolioItemComponent
  ],
  //importando app_routing,HpptModule
  imports: [
    BrowserModule,
    app_routing,
    HttpModule
  ],
  //importando InformacionService
  providers: [ InformacionService,ProductosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
