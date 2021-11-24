import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationInfoComponent } from './pages/location-info/location-info.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { RaflarComponent } from './pages/raflar/raflar.component';
import { SaleProductsComponent } from './pages/sale-products/sale-products.component';
import { StoresComponent } from './pages/stores/stores.component';
import { UsersListComponent } from './pages/users-list/users-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'locations-info', component: LocationInfoComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'users-list', component: UsersListComponent },
  { path: 'sale-products', component: SaleProductsComponent },
  { path: 'raflar', component: RaflarComponent },
  { path: 'stores', component: StoresComponent },
  { path: 'add-pruduct', component: AddProductComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  LocationInfoComponent,
  LocationsComponent,
  UsersListComponent,
  SaleProductsComponent,
  ProductsComponent,
  RaflarComponent,
  StoresComponent,
  AddProductComponent,
  LoginComponent,
];
