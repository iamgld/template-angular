// Angular Imports
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'bytes',
})
export class BytesPipe implements PipeTransform {
	transform(value: number, ...args: unknown[]): string {
		let bytes = `${value} B`
		if (value > 100) {
			const kB = value / 1000
			bytes = `${kB.toFixed()} kB`
		}
		if (value > 1_000_000) {
			const kB = value / 1000
			const MB = kB / 1000
			bytes = `${MB.toFixed(2)} MB`
		}
		return bytes
	}
}
