import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [ 
      {
        path: '',
        redirectTo: './tab1.page',
        pathMatch: 'full'
      }
    ]
  }
];
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
