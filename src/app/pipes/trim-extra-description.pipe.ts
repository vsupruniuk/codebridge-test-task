import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'trimExtraDescription',
})
export class TrimExtraDescriptionPipe implements PipeTransform {
	transform(description: string): string {
		const maxDescriptionLength = 100;

		if (description.length <= maxDescriptionLength) {
			return description;
		} else {
			const descriptionArr = description.split(' ');
			let result = '';

			while (result.length + descriptionArr[0].length <= maxDescriptionLength) {
				result += `${descriptionArr[0]} `;
				descriptionArr.shift();
			}

			result += '...';

			return result;
		}
	}
}
