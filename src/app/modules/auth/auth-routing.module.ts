import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

// import { LoginComponent } from '@app/auth/views'

const routes: Routes = [
	// {
	// 	path: 'login',
	// 	component: LoginComponent,
	// },
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthRoutingModule {}
