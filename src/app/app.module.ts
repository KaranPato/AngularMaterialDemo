import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModuleModule } from './common/custom-material-module/custom-material-module.module';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { RecepiListComponent } from './components/recepi-list/recepi-list.component';
import { AddUpdateRecepiComponent } from './components/add-update-recepi/add-update-recepi.component';

@NgModule({
  declarations: [
    AppComponent,
    RecepiListComponent,
    AddUpdateRecepiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModuleModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
