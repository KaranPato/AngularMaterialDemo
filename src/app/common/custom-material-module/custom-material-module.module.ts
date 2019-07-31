import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule, MatProgressBarModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatFormFieldModule, MatGridListModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule, MatProgressBarModule,
    MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatFormFieldModule, MatGridListModule
  ],
  exports: [
    MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule, MatProgressBarModule,
    MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatFormFieldModule, MatGridListModule
  ],
  declarations: []
})
export class CustomMaterialModuleModule { }
