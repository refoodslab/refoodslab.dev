import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { LocationInfoComponent } from './location-info/location-info.component';
import { LocationsComponent } from './locations/locations.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { RaflarComponent } from './raflar/raflar.component';
import { SaleProductsComponent } from './sale-products/sale-products.component';
import { StoresComponent } from './stores/stores.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'locations-info', component: LocationInfoComponent },
      { path: 'locations', component: LocationsComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'users-list', component: UsersListComponent },
      { path: 'sale-products', component: SaleProductsComponent },
      { path: 'raflar', component: RaflarComponent },
      { path: 'stores', component: StoresComponent },
      { path: 'add-pruduct', component: AddProductComponent },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
export const routingAdminComponents = [
  MainComponent,
  HomeComponent,
  LocationInfoComponent,
  LocationsComponent,
  UsersListComponent,
  SaleProductsComponent,
  ProductsComponent,
  RaflarComponent,
  StoresComponent,
  AddProductComponent,
];
