import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationInfoComponent } from './pages/location-info/location-info.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { ProductsComponent } from './pages/products/products.component';
import { RaflarComponent } from './pages/raflar/raflar.component';
import { SaleProductsComponent } from './pages/sale-products/sale-products.component';
import { StoresComponent } from './pages/stores/stores.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LocationInfoComponent,
    UsersListComponent,
    ProductsComponent,
    RaflarComponent,
    SaleProductsComponent,
    StoresComponent,
    AddProductComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
