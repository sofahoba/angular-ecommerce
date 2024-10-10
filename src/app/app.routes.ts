import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LittleComponent } from './little/little.component';
export const routes: Routes = [
    { path: 'products', component: ProductsComponent },
    { path: 'little', component: LittleComponent },
    
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
})
export class AppRoutingModule{ }
