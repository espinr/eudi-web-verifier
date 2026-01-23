import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { JWTService } from '@core/services/jwt.service';
import { Single } from '@core/models/presentation/PresentedAttestation';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from "@angular/material/card";
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import {AttestationFormat} from "@core/models/attestation/AttestationFormat";
import { CredentialDictionaryService } from '@app/core/services/credential-dictionary.service';

@Component({
  selector: 'vc-view-attestation',
  imports: [
    CommonModule,
    SharedModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatDividerModule,
  ],
  templateUrl: './view-attestation.component.html',
  styleUrls: ['./view-attestation.component.scss'],
  providers: [JWTService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewAttestationComponent implements OnInit {
 
  @Input() attestation: Single = { 
    kind: "single", format: AttestationFormat.MSO_MDOC, name: "", attributes: [], metadata: [] 
  };

  credentialDictionary!: CredentialDictionaryService;


  ngOnInit(): void {
    this.credentialDictionary = new CredentialDictionaryService();

  }

  prettyNameAttestation(code: string): string {
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
      return key.includes('expiry_date') && json.hasOwnProperty('value');      
    } catch (e) {
      console.error('Error parsing the JSON');
      return false;
    }
  }

  // Portrait {"type":"Buffer","data": format
  isPicture(key: string, value:any): boolean {
    try {
      let json = JSON.parse(value);
      return key.includes('portrait') && json.hasOwnProperty('type') && json.hasOwnProperty('data');      
    } catch (e) {
      console.error('Error parsing the JSON');
      return false;
    }
  }

  classAttestation(key: string): string {
    if (key === 'net.openathletics.health.1') {
      return 'health-avatar';
    }
    if (key === 'net.openathletics.license.1') {
      return 'license-avatar';
    }
    return 'sample-avatar';
  }

  prettyPrintValue(key: string, value:any): string {
      if (key.includes('qualified')) {
        return value==='true'? 'Participation is allowed <span class="valid-attribute">✅</span>' : '<span class="valid-attribute">❌</span>'; 
      }
      if (key.includes('banned')) {
        return value==='true'?  'Banned <span class="valid-attribute">❌</span>' : '(No) Participation is allowed <span class="valid-attribute">✅</span>'; 
      }
      return value;
  }

  prettyDate(value: string): any {
    try {
      let json = JSON.parse(value);
      let parsedDate = Date.parse(json.value);
      let isValidEmoji = parsedDate > Date.now()? '<span class="valid-attribute">✅</span>' : '<span class="valid-attribute">❌</span>';     
      return `${json.value} ${isValidEmoji} `;
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

   // Portrait comes in format: {"type":"Buffer","data": format
  getImageFromBuffer(value: any): string {
    try {
      let bufferObj = JSON.parse(value);
  
      // Validate input
      if (!bufferObj || typeof bufferObj !== 'object' || !Array.isArray(bufferObj.data)) {
        throw new Error('Invalid Buffer object format');
      }
    
      // Convert byte array to binary string
      const binaryString = bufferObj.data
        .map((byte: number) => String.fromCharCode(byte))
        .join('');
      
      // Convert to base64
      const base64String = btoa(binaryString);
      
      // Return as JPEG data URL (adjust MIME type if needed)
      return `data:image/jpeg;base64,${base64String}`;
    } catch (e) {
      console.error('Invalid JSON:', value);
      console.error('message:', e);

    }
    return '';
  }
}
