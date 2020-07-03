import { NgModule } from '@angular/core';
import { MatBadgeModule, MatButtonModule, MatCardModule, MatDialogModule, MatDividerModule, MatExpansionModule,
  MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSelectModule, MatSidenavModule,
  MatSlideToggleModule, MatSnackBarModule, MatTabsModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatBadgeModule, MatButtonModule, MatCardModule, MatDialogModule, MatDividerModule, MatExpansionModule,
    MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSelectModule, MatSidenavModule,
    MatSlideToggleModule, MatSnackBarModule, MatTabsModule, MatToolbarModule
  ],
  exports: [
    MatBadgeModule, MatButtonModule, MatCardModule, MatDialogModule, MatDividerModule, MatExpansionModule,
    MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSelectModule, MatSidenavModule,
    MatSlideToggleModule, MatSnackBarModule, MatTabsModule, MatToolbarModule
  ]
})
export class MaterialModule { }
