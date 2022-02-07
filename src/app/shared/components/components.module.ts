// Angular Imports
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
// Shared Imports
import { MaterialModule } from '@app/modules'

const components: any[] = []

@NgModule({
	declarations: [...components],
	imports: [CommonModule, ReactiveFormsModule, MaterialModule],
	exports: [...components],
})
export class ComponentsModule {}
