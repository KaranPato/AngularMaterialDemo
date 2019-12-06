import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { RecepiListComponent } from 'src/app/components/recepi-list/recepi-list.component';
import { AddUpdateRecepiComponent } from 'src/app/components/add-update-recepi/add-update-recepi.component';
import { CustomMaterialModuleModule } from 'src/app/common/custom-material-module/custom-material-module.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FooterComponent } from 'src/app/components/Layout Components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/Layout Components/header/header.component';

@NgModule({
  declarations: [
    LayoutComponent,
    RecepiListComponent,
    AddUpdateRecepiComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    CustomMaterialModuleModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LayoutModule { }
