// Angular Imports
import { Directive, ElementRef, HostListener, Input } from '@angular/core'

@Directive({
	selector: 'img[appImageBroken]',
})
export class ImageBrokenDirective {
	@Input() fallbackImage = 'assets/images/utils/image-broken.png'

	constructor(private _host: ElementRef) {}

	@HostListener('error') handleError(): void {
		const nativeElement = this._host.nativeElement
		// console.log('🔴 Crash image -->', this._host)
		nativeElement.src = this.fallbackImage
	}
}
