import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddUpdateRecepiComponent } from 'src/app/components/add-update-recepi/add-update-recepi.component';
import { RecepiListComponent } from 'src/app/components/recepi-list/recepi-list.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'recepi-list', component: RecepiListComponent },
      { path: '', redirectTo: 'recepi-list', pathMatch: 'full' },
      { path: 'add-update-recepi/:id', component: AddUpdateRecepiComponent },
    ]
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
