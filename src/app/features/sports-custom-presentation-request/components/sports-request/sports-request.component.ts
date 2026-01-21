import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

@Component({
    selector: 'vc-presentation-request-editor',
    imports: [CommonModule, SharedModule],
    templateUrl: './sports-request.component.html',
    styleUrls: ['./sports-request.component.scss']
})
export class SportsRequestComponent {

	constructor (
	) {}

	onRequest (code: string) {
		//this.invalidJSON = code.length === 0 || this.isJSON(code);
    //this.dataService.customRequest$.next(code);
	}

}
