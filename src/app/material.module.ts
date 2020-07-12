import { NgModule } from '@angular/core';
import { MatBadgeModule, MatButtonModule, MatCardModule, MatDialogModule, MatDividerModule, MatExpansionModule,
  MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSelectModule, MatSidenavModule, MatMenuModule,
  MatSlideToggleModule, MatSnackBarModule, MatTabsModule, MatToolbarModule, MatStepperModule, MatListModule, MatTooltipModule, 
  MatTableModule, MatButtonToggleModule} from '@angular/material';

  const modules = [
    MatBadgeModule, MatButtonModule, MatCardModule, MatDialogModule, MatDividerModule, MatExpansionModule,
    MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSelectModule, MatSidenavModule,
    MatSlideToggleModule, MatSnackBarModule, MatTabsModule, MatToolbarModule, MatStepperModule, MatListModule,
    MatTooltipModule, MatMenuModule, MatTableModule, MatButtonToggleModule
  ]
@NgModule({
  declarations: [],
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class MaterialModule { }
