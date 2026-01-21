import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { JWTService } from '@core/services/jwt.service';
import { Single } from '@core/models/presentation/PresentedAttestation';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { DialogData } from '@features/invoke-sports-wallet/components/view-attestation/model/DialogData';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { CredentialDictionaryService } from '@app/core/services/credential-dictionary.service';

@Component({
  selector: 'vc-view-attestation',
  imports: [
    CommonModule,
    SharedModule,
    MatExpansionModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    MatDividerModule,
  ],
  templateUrl: './view-attestation.component.html',
  styleUrls: ['./view-attestation.component.scss'],
  providers: [JWTService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewAttestationComponent implements OnInit {
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  attestation!: Single;
  credentialDictionary!: CredentialDictionaryService;


  ngOnInit(): void {
    this.attestation = this.data.attestation;
    this.credentialDictionary = new CredentialDictionaryService();

  }

  prettyNameAttestation(code: string) {
    return this.credentialDictionary.getAttribute(code);
  }

  isJson(str: string): boolean {
    // try to parse the string as JSON
    if (!str.trim().startsWith('{') && !str.trim().startsWith('[')) {
      return false;
    }
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  }

  parseJson(value: string): any {
    try {
      return JSON.parse(value);
    } catch (e) {
      console.error('Invalid JSON string:', value);
      return {};
    }
  }

  // Date is in {'value':'YYYY-MM-DD'} format
  isDate(key: string, value:any): boolean {
    try {
      let json = JSON.parse(value);
      console.info(`Date? Key ${key}, value: ${value}`);
      console.info(`json ${JSON.stringify(json)}`);
      console.info(` ${key.indexOf('expiry_date')}`);
      console.info(json.hasOwnProperty('value'))
      return key.includes('expiry_date') && json.hasOwnProperty('value');      
    } catch (e) {
      console.error('Error parsing the JSON');
      return false;
    }
    
  }

  parseDate(value: string): any {
    try {
      let json = JSON.parse(value);
      console.info(`Parsing date value: ${json.value}`);
      return json.value;
    } catch (e) {
      console.error('Invalid JSON string:', value);
    }
    return '-';
  }
  
  isObject(value: any): boolean {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  objectToKeyValue(obj: any): {key: string, value: any}[] {
    return Object.keys(obj).map(key => ({key, value: obj[key]}));
  }

  trackByFn(index: number, data: any) {
    return data.key + index;
  }
}
