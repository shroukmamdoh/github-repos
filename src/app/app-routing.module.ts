import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LostPageComponent } from './modules/shared/components/lost-page/lost-page.component';

const routes: Routes = [
  {
    path: 'repos',
    loadChildren: () =>
      import('./modules/layouts/layouts.module').then((m) => m.LayoutsModule),
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
