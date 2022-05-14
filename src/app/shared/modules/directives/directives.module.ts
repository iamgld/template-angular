// Angular Imports
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
// This Module Imports
import { ImageBrokenDirective } from '@app/directives'

const directives = [ImageBrokenDirective]

@NgModule({
	declarations: [...directives],
	imports: [CommonModule],
	exports: [...directives],
})
export class DirectivesModule {}
