import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RepositoryItemComponent } from './components/repository-item/repository-item.component';
import { RepositoriesListComponent } from './components/repositories-list/repositories-list.component';
import { LostPageComponent } from '../shared/components/lost-page/lost-page.component';
import { LayoutRoutingModule } from './layouts-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    RepositoryItemComponent,
    RepositoriesListComponent,
    LostPageComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutsModule { }
