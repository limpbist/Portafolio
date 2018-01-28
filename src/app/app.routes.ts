
import { RouterModule, Routes } from '@angular/router';

/*importando las 3 paginas */
import
{
 AboutComponent,
 PortafolioComponent,
 PortafolioItemComponent
}
from "./components/index.paginas";
/*redireccionando las paginas */
const app_routes: Routes = [
  { path: '', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item', component: PortafolioItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes);