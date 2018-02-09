
import { RouterModule, Routes } from '@angular/router';

/*importando las 3 paginas */
import
{
 AboutComponent,
 PortafolioComponent,
 PortafolioItemComponent,
 SearchComponent
 //siempre importar en approutes
} from "./components/index.paginas";
/*redireccionando las paginas */
const app_routes: Routes = [
  { path: 'index', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item/:id', component: PortafolioItemComponent },
  { path: 'buscar/:termino', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'index' }
];

//useHash : true crear rutas html5 para conpatibilidad
export const app_routing = RouterModule.forRoot(app_routes , {useHash:true});
