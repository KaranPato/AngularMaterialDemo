import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddUpdateRecepiComponent } from './components/add-update-recepi/add-update-recepi.component';
import { RecepiListComponent } from './components/recepi-list/recepi-list.component';

const routes: Routes = [
  { path: 'recepi-list', component: RecepiListComponent },
  { path: '', redirectTo: 'recepi-list', pathMatch: 'full' },
  { path: 'add-update-recepi/:id', component: AddUpdateRecepiComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
