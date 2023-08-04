import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'keywords',
})
export class KeywordsPipe implements PipeTransform {
	transform(value: string, keywords: string, targetElement: string): string {
		if (!keywords) {
			return value;
		}

		const keywordArray = keywords.split(' ').filter(keyword => keyword.trim() !== '');
		const regex = new RegExp(keywordArray.join('|'), 'gi');
		const matches = value.match(regex);

		if (matches && targetElement === 'title') {
			return value.replace(regex, match => `<span class="keyword">${match}</span>`);
		} else if (matches && targetElement === 'description') {
			return value.replace(regex, match => `<span class="keyword">${match}</span>`);
		}

		return value;
	}
}
