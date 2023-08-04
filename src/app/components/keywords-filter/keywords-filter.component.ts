import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setKeywordsValue } from '../../store/keywords/keywords.actions';

@Component({
	selector: 'app-keywords-filter',
	templateUrl: './keywords-filter.component.html',
	styleUrls: ['./keywords-filter.component.scss'],
})
export class KeywordsFilterComponent {
	constructor(private store: Store) {}

	inputValue = '';

	onInputChange() {
		this.store.dispatch(setKeywordsValue({ keywords: this.inputValue }));
	}
}
