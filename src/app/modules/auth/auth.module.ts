// Angular Imports
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
// This Module Imports
import { AuthRoutingModule } from './auth-routing.module'
// Shared Imports
import { MaterialModule } from '@app/modules'

// Views
// import { LoginComponent } from '@app/auth/views'

const components: any[] = []

const exports: any[] = []

@NgModule({
	declarations: [...components],
	imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, MaterialModule],
	exports: [...exports],
})
export class AuthModule {}
