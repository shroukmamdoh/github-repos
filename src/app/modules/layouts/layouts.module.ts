import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RepositoryItemComponent } from './components/repository-item/repository-item.component';
import { RepositoriesListComponent } from './components/repositories-list/repositories-list.component';
import { LostPageComponent } from '../shared/components/lost-page/lost-page.component';
import { LayoutRoutingModule } from './layouts-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    HomeComponent,
    RepositoryItemComponent,
    RepositoriesListComponent,
    LostPageComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    InfiniteScrollModule
  ]
})
export class LayoutsModule { }
