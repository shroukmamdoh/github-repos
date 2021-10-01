import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'repos-list',
    loadChildren: () =>
      import('./modules/layouts/layouts.module').then((m) => m.LayoutsModule),
  },
  {
    path: '',
    redirectTo:'/repos-list', pathMatch: 'full' 
  },
  {
    path: '**',
    redirectTo:'page-not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
