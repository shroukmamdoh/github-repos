import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LostPageComponent } from '../shared/components/lost-page/lost-page.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: LostPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
