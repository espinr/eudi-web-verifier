import { CredentialDictionary } from '../models/CredentialDictionary';

export class CredentialDictionaryService {

    credentials: CredentialDictionary<string> = {
    'net.openathletics.license.1': 'Athlete License',
    'net.openathletics.health.1': 'Health Self-Declaration',
    'net.openathletics.license.1:aui_banned': 'AUI Banned?',
    'net.openathletics.license.1:expiry_date': 'License expiry date',
    'net.openathletics.license.1:family_name': 'Family Name',
    'net.openathletics.license.1:given_name': 'Given Name',
    'net.openathletics.license.1:portrait': 'Portrait',
    'net.openathletics.license.1:qualified_competitor_nationals_2026': 'Qualified to Nationals 2026?',
    'net.openathletics.health.1:expiry_date': 'Self-declaration expiry date',
    'net.openathletics.health.1:issuing_authority': 'Issuing authority',
    'net.openathletics.license.1:nationality': 'Nationalities',
    'net.openathletics.license.1:category': 'Competition category'    
  };

  // Method to get value by key
  getAttribute(code: string): string {
    return this.credentials[code] || code;
  }

  // Method to check if key exists
  hasAttribute(code: string): boolean {
    return code in this.credentials;
  }

}