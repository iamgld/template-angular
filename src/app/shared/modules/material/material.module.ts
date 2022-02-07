import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
// import { MatSidenavModule } from '@angular/material/sidenav'
// import { MatButtonModule } from '@angular/material/button'
// import { MatIconModule } from '@angular/material/icon'
// import { MatInputModule } from '@angular/material/input'
// import { MatFormFieldModule } from '@angular/material/form-field'
// import { MatAutocompleteModule } from '@angular/material/autocomplete'
// import { MatTableModule } from '@angular/material/table'
// import { MatPaginatorModule } from '@angular/material/paginator'
// import { MatSortModule } from '@angular/material/sort'
// import { MatDividerModule } from '@angular/material/divider'
// import { MatMenuModule } from '@angular/material/menu'
// import { MatListModule } from '@angular/material/list'
// import { MatCardModule } from '@angular/material/card'
// import { MatSelectModule } from '@angular/material/select'
// import { MatDatepickerModule } from '@angular/material/datepicker'
// import { MatNativeDateModule } from '@angular/material/core'
// import { MatSnackBarModule } from '@angular/material/snack-bar'
// import { MatCheckboxModule } from '@angular/material/checkbox'
// import { MatDialogModule } from '@angular/material/dialog'
// import { MatRadioModule } from '@angular/material/radio'
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

const modules: any[] = [
	// MatSidenavModule,
	// MatButtonModule,
	// MatIconModule,
	// MatInputModule,
	// MatFormFieldModule,
	// MatAutocompleteModule,
	// MatTableModule,
	// MatPaginatorModule,
	// MatSortModule,
	// MatDividerModule,
	// MatMenuModule,
	// MatListModule,
	// MatCardModule,
	// MatSelectModule,
	// MatDatepickerModule,
	// MatNativeDateModule,
	// MatSnackBarModule,
	// MatCheckboxModule,
	// MatDialogModule,
	// MatRadioModule,
	// MatProgressSpinnerModule,
]

@NgModule({
	declarations: [],
	imports: [CommonModule],
	exports: [...modules],
})
export class MaterialModule {}
