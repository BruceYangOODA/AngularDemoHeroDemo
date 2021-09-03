import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';


const materials = [
  BrowserAnimationsModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatProgressBarModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatListModule,
  MatPaginatorModule
  
]

@NgModule({
  imports: [ materials ],
  exports: [ materials ],
  providers: [
   
  ]
})
export class MaterialModule { }
