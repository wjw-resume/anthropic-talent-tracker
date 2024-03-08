import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'maxLengthPipe'
})
export class MaxLengthPipePipe implements PipeTransform {

	transform(value: string, maxLength: number): string {
		if (value.length <= maxLength) {
			return value;
		}

		return value.substring(0, maxLength) + '...';
	}

}
