import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'basket',
  },
  {
    path: 'basket',
    loadChildren: () => import('basket/Module').then((m) => m.RemoteModule),
  },
  {
    path: 'products',
    loadChildren: () => import('products/Module').then((m) => m.RemoteModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
