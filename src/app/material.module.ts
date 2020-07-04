import { NgModule } from '@angular/core';
import { MatBadgeModule, MatButtonModule, MatCardModule, MatDialogModule, MatDividerModule, MatExpansionModule,
  MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSelectModule, MatSidenavModule,
  MatSlideToggleModule, MatSnackBarModule, MatTabsModule, MatToolbarModule, MatStepperModule, MatListModule} from '@angular/material';

  const modules = [
    MatBadgeModule, MatButtonModule, MatCardModule, MatDialogModule, MatDividerModule, MatExpansionModule,
    MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSelectModule, MatSidenavModule,
    MatSlideToggleModule, MatSnackBarModule, MatTabsModule, MatToolbarModule, MatStepperModule, MatListModule
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
