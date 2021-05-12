import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionComponent } from './page/gestion/gestion.component';
import { HomeComponent } from './page/home/home.component';
import { ProductsComponent } from './page/products/products.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'prods', component: ProductsComponent},
  {path: 'gestion', component: GestionComponent},
  {path: 'gestion/:id', component: GestionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
