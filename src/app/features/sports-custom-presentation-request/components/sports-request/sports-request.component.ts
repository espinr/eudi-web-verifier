import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '@app/core/services/data-service';
import { SharedModule } from '@app/shared/shared.module';

@Component({
    selector: 'vc-presentation-request-editor',
    imports: [CommonModule, SharedModule],
    templateUrl: './sports-request.component.html',
    styleUrls: ['./sports-request.component.scss']
})
export class SportsRequestComponent {

	invalidJSON = true;
	constructor (
    //private readonly dataService: DataService
	) {}

	onRequest (code: string) {
		//this.invalidJSON = code.length === 0 || this.isJSON(code);
    //this.dataService.customRequest$.next(code);
	}

}
