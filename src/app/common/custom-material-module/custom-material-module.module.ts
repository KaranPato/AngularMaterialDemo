import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule, MatProgressBarModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatFormFieldModule,
   MatGridListModule, MatTabsModule, MatCheckboxModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule, MatProgressBarModule,
    MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatFormFieldModule,
    MatGridListModule, MatTabsModule, MatCheckboxModule
  ],
  exports: [
    MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule, MatProgressBarModule,
    MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatFormFieldModule,
    MatGridListModule, MatTabsModule, MatCheckboxModule
  ],
  declarations: []
})
export class CustomMaterialModuleModule { }
