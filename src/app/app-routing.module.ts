import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa los componentes de cada página
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },                // Página de inicio
  { path: 'about', component: AboutComponent },            // Sobre Mí
  { path: 'services', component: ServiciosComponent },      // Servicios
  { path: 'portfolio', component: PortfolioComponent },    // PortfolioTestimonios
  { path: 'contact', component: ContactComponent },        // Contacto
  { path: '**', redirectTo: '' }                           // Redirige rutas desconocidas a inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
