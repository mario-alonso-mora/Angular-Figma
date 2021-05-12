import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Core/header/header.component';
import { FooterComponent } from './Core/footer/footer.component';
import { NavComponent } from './Core/nav/nav.component';
import { HomeComponent } from './page/home/home.component';
import { ProductsComponent } from './page/products/products.component';
import { GestionComponent } from './page/gestion/gestion.component';
import { GaleriaComponent } from './shared/galeria/galeria.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StartsPipe } from './shared/pipes/starts.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductsComponent,
    GestionComponent,
    GaleriaComponent,
    FilterPipe,
    StartsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
