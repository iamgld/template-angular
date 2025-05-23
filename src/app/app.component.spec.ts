// Angular Imports
import { ComponentFixture, TestBed } from '@angular/core/testing'
// This Component Imports
import { AppComponent } from './app.component'

describe('AppComponent', () => {
	let component: AppComponent
	let fixture: ComponentFixture<AppComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AppComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(AppComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
