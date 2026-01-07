import {AttestationDefinition} from "@core/models/attestation/AttestationDefinition";
import {AttestationType} from "@core/models/attestation/AttestationType";

export const PID_ATTESTATION: AttestationDefinition = {
  name: "Person Identification Data (PID)",
  type: AttestationType.PID,
  dataSet: [
    { identifier: 'family_name', attribute: 'Family name'},
    { identifier: 'given_name', attribute: 'Given name'},
    { identifier: 'birth_date', attribute: 'Birthdate'},
    { identifier: 'age_over_18', attribute: 'Age over 18'},
    { identifier: 'age_in_years', attribute: 'Age in years'},
    { identifier: 'age_birth_year', attribute: 'Age birth year'},
    { identifier: 'family_name_birth', attribute: 'Family name birth'},
    { identifier: 'given_name_birth', attribute: 'Given name birth'},
    { identifier: 'birth_place', attribute: 'Birth place'},
    { identifier: 'resident_address', attribute: 'Resident address'},
    { identifier: 'resident_country', attribute: 'Resident country'},
    { identifier: 'resident_state', attribute: 'Resident state'},
    { identifier: 'resident_city', attribute: 'Resident city'},
    { identifier: 'resident_postal_code', attribute: 'Resident postal code'},
    { identifier: 'resident_street', attribute: 'Resident street'},
    { identifier: 'resident_house_number', attribute: 'Resident house number'},
    { identifier: 'sex', attribute: 'Sex'},
    { identifier: 'nationality', attribute: 'Nationality'},
    { identifier: 'issuance_date', attribute: 'Issuance date'},
    { identifier: 'expiry_date', attribute: 'Expiry date'},
    { identifier: 'issuing_authority', attribute: 'Issuing authority'},
    { identifier: 'document_number', attribute: 'Document number'},
    { identifier: 'personal_administrative_number', attribute: 'Personal administrative number'},
    { identifier: 'issuing_country', attribute: 'Issuing country'},
    { identifier: 'issuing_jurisdiction', attribute: 'Issuing jurisdiction'},
    { identifier: 'portrait', attribute: 'Portrait'},
    { identifier: 'email_address', attribute: 'Email address'},
    { identifier: 'mobile_phone_number', attribute: 'Mobile phone number'},
    { identifier: 'trust_anchor', attribute: 'Trust anchor'},
  ]
}

export const MDL_ATTESTATION: AttestationDefinition = {
  name: "Mobile Driving Licence (MDL)",
  type: AttestationType.MDL,
  dataSet: [
    { identifier: 'family_name', attribute: 'Family name' },
    { identifier: 'given_name', attribute: 'Given name'},
    { identifier: 'birth_date', attribute: 'Birthdate'},
    { identifier: 'issue_date', attribute: 'Issue date'},
    { identifier: 'expiry_date', attribute: 'Expiry date'},
    { identifier: 'age_over_18', attribute: 'Age over 18'},
    { identifier: 'age_over_21', attribute: 'Age over 21'},
    { identifier: 'age_in_years', attribute: 'Age in years'},
    { identifier: 'age_birth_year', attribute: 'Age birth year'},
    { identifier: 'issuing_authority', attribute: 'Issuing authority'},
    { identifier: 'document_number', attribute: 'Document number'},
    { identifier: 'portrait', attribute: 'Portrait'},
    { identifier: 'driving_privileges', attribute: 'Driving privileges'},
    { identifier: 'un_distinguishing_sign', attribute: 'Un-distinguishing sign'},
    { identifier: 'administrative_number', attribute: 'Administrative number'},
    { identifier: 'sex', attribute: 'Sex'},
    { identifier: 'height', attribute: 'Height'},
    { identifier: 'weight', attribute: 'Weight'},
    { identifier: 'eye_colour', attribute: 'Eye colour'},
    { identifier: 'hair_colour', attribute: 'Hair colour'},
    { identifier: 'birth_place', attribute: 'Birth place'},
    { identifier: 'resident_address', attribute: 'Resident address'},
    { identifier: 'portrait_capture_date', attribute: 'Portrait capture date'},
    { identifier: 'nationality', attribute: 'Nationality'},
    { identifier: 'resident_city', attribute: 'Resident city'},
    { identifier: 'resident_state', attribute: 'Resident state'},
    { identifier: 'resident_postal_code', attribute: 'Resident postal code'},
    { identifier: 'resident_country', attribute: 'Resident country'},
    { identifier: 'family_name_national_character', attribute: 'Family name national character'},
    { identifier: 'given_name_national_character', attribute: 'Given name national character'},
    { identifier: 'signature_usual_mark', attribute: 'Signature usual mark'}
  ]
}

export const PHOTO_ID_ATTESTATION: AttestationDefinition = {
  name: "Photo ID",
  type: AttestationType.PHOTO_ID,
  dataSet: [
    { identifier: 'portrait', attribute: 'Portrait'},
    { identifier: 'portrait_capture_date', attribute: 'Portrait capture date'},
    { identifier: 'person_id', attribute: 'Person id'},
    { identifier: 'family_name', attribute: 'Family name'},
    { identifier: 'given_name', attribute: 'Given name'},
    { identifier: 'birth_date', attribute: 'Birth date'},
    { identifier: 'age_over_18', attribute: 'Age over 18'},
    { identifier: 'age_over_NN', attribute: 'Age over NN'},
    { identifier: 'age_in_years', attribute: 'Age in years'},
    { identifier: 'age_birth_year', attribute: 'Age birth year'},
    { identifier: 'family_name_birth', attribute: 'Family name birth'},
    { identifier: 'given_name_birth', attribute: 'Given name birth'},
    { identifier: 'birth_place', attribute: 'Birth place'},
    { identifier: 'birth_country', attribute: 'Birth country'},
    { identifier: 'birth_state', attribute: 'Birth state'},
    { identifier: 'birth_city', attribute: 'Birth city'},
    { identifier: 'resident_address', attribute: 'Resident address'},
    { identifier: 'resident_country', attribute: 'Resident country'},
    { identifier: 'resident_state', attribute: 'Resident state'},
    { identifier: 'resident_city', attribute: 'Resident city'},
    { identifier: 'resident_postal_code', attribute: 'Resident postal code'},
    { identifier: 'resident_street', attribute: 'Resident street'},
    { identifier: 'resident_house_number', attribute: 'Resident house number'},
    { identifier: 'gender', attribute: 'Gender'},
    { identifier: 'nationality', attribute: 'Nationality'},
    { identifier: 'issuance_date', attribute: 'Issuance date'},
    { identifier: 'expiry_date', attribute: 'Expiry date'},
    { identifier: 'issuing_authority', attribute: 'Issuing authority'},
    { identifier: 'document_number', attribute: 'Document number'},
    { identifier: 'administrative_number', attribute: 'Administrative number'},
    { identifier: 'issuing_country', attribute: 'Issuing country'},
    { identifier: 'issuing_jurisdiction', attribute: 'Issuing jurisdiction'}
  ]
}

export const EHIC_ATTESTATION: AttestationDefinition = {
  name: "European Health Insurance Card (EHIC)",
  type: AttestationType.EHIC,
  dataSet: [
    { identifier: "credential_holder", attribute: "Credential holder" },
    { identifier: "subject", attribute: "Subject" },
    { identifier: 'social_security_pin', attribute: 'Social security PIN'},
    { identifier: "starting_date", attribute: "Starting date" },
    { identifier: "ending_date", attribute: "Ending date" },
    { identifier: 'document_id', attribute: 'Document identifier' },
    { identifier: "competent_institution", attribute: 'Competent institution' }
  ],
}

export const EHIC_ATTESTATION_DC4EU: AttestationDefinition = {
  name: "DC4EU European Health Insurance Card (SD-JWT VC Compact)",
  type: AttestationType.EHIC_DC4EU,
  dataSet: [
    { identifier: "personal_administrative_number", attribute: "Social Security PIN" },
    { identifier: "issuing_country", attribute: "Issuing country" },
    { identifier: "issuing_authority", attribute: "Issuing authority" },
    { identifier: "date_of_expiry", attribute: "Expiry date" },
    { identifier: "date_of_issuance", attribute: "Issue date" },
    { identifier: "authentic_source", attribute: 'Competent institution' },
    { identifier: "ending_date", attribute: "Ending date" },
    { identifier: "starting_date", attribute: "Starting date" },
    { identifier: "document_number", attribute: "Document number" },
  ],
}

export const PDA1_ATTESTATION: AttestationDefinition = {
  name: "Portable Document A1 (PDA1)",
  type: AttestationType.PDA1,
  dataSet: [
    { identifier: "credential_holder", attribute: "Credential holder" },
    { identifier: 'social_security_pin', attribute: 'Social security PIN' },
    { identifier: "nationality", attribute: "Nationality" },
    { identifier: "employment_details", attribute: "Employment details" },
    { identifier: 'places_of_work', attribute: 'Places of work' },
    { identifier: 'legislation', attribute: 'Legislation' },
    { identifier: 'status_confirmation', attribute: 'Status confirmation'},
    { identifier: 'document_id', attribute: 'Document identifier'},
    { identifier: "competent_institution", attribute: "Competent institution"},
  ]
}

export const SPORTS_LICENSE_ATTESTATION: AttestationDefinition = {
  name: "Athlete License",
  type: AttestationType.SPORTS_LICENSE,
  dataSet: [
    { identifier: 'family_name', attribute: 'Family name' },
    { identifier: 'given_name', attribute: 'Given name'},
    { identifier: 'birth_date', attribute: 'Birthdate'},
    { identifier: 'nationality', attribute: 'Nationalities'},
    { identifier: 'email_address', attribute: 'Email address'},
    { identifier: 'phone', attribute: 'Phone'},
    { identifier: 'full_address', attribute: 'Full address'},
    { identifier: 'postal_code', attribute: 'Postal code'},
    { identifier: 'locality', attribute: 'Locality'},
    { identifier: 'country', attribute: 'Country'},
    { identifier: 'gender', attribute: 'Gender'},
    { identifier: 'age_in_years', attribute: 'Age in years'},
    { identifier: 'age_birth_year', attribute: 'Age birth year'},
    { identifier: 'category', attribute: 'Category'},
    { identifier: 'club_name', attribute: 'Club or team'},
    { identifier: 'document_number', attribute: 'License number'},
    { identifier: 'issuance_date', attribute: 'Issue date'},
    { identifier: 'expiry_date', attribute: 'Expiry date'},
    { identifier: 'eu_scope_license', attribute: 'Participation in EU competitions'},
    { identifier: 'aui_banned', attribute: 'Athletics Integrity Unit Ban'},
    { identifier: 'qualified_competitor_nationals_2026', attribute: 'Qualified for Utopian Nationals 2026'},
    { identifier: 'portrait', attribute: 'Portrait'}
  ]
}

export const SPORTS_FAN_ATTESTATION: AttestationDefinition = {
  name: "Fan Loyalty",
  type: AttestationType.SPORTS_FAN,
  dataSet: [
    { identifier: 'family_name', attribute: 'Family name' },
    { identifier: 'given_name', attribute: 'Given name'},
    { identifier: 'nationality', attribute: 'Nationalities'},
    { identifier: 'fan_id', attribute: 'Fan ID'},
    { identifier: 'issuance_date', attribute: 'Issue date'},
    { identifier: 'expiry_date', attribute: 'Expiry date'},
    { identifier: 'portrait', attribute: 'Portrait'}
  ]
}

export const SPORTS_DIPLOMA_ATTESTATION: AttestationDefinition = {
  name: "Sports Diploma",
  type: AttestationType.SPORTS_DIPLOMA,
  dataSet: [
    { identifier: 'identifier', attribute: 'Identifier'},
    { identifier: 'competition', attribute: 'Competition under scope'},
    { identifier: 'family_name', attribute: 'Family name' },
    { identifier: 'first_name', attribute: 'Given name'},
    { identifier: 'display_name', attribute: 'Display name'},
    { identifier: 'date_of_competition', attribute: 'Date of competition'}
  ]
}

export const SPORTS_HEALTH_ATTESTATION: AttestationDefinition = {
  name: "Health self-declaration",
  type: AttestationType.SPORTS_HEALTH,
  dataSet: [
    { identifier: 'issuance_date', attribute: 'Issuance date'},
    { identifier: 'expiry_date', attribute: 'Expiry date'},
    { identifier: 'issuing_country', attribute: 'Issuing country' },
    { identifier: 'issuing_authority', attribute: 'Issuing authority'}
  ]
}

export const SUPPORTED_ATTESTATIONS: { [id: string]: AttestationDefinition } = {
  "pid": PID_ATTESTATION,
//  "mdl": MDL_ATTESTATION,
//  "photo_id": PHOTO_ID_ATTESTATION,
//  "ehic": EHIC_ATTESTATION,
//  "ehic-dc4eu": EHIC_ATTESTATION_DC4EU,
//  "pda1": PDA1_ATTESTATION,
"sports_license": SPORTS_LICENSE_ATTESTATION,
"sports_fan": SPORTS_FAN_ATTESTATION,
"sports_health": SPORTS_HEALTH_ATTESTATION,
"sports_diploma": SPORTS_DIPLOMA_ATTESTATION  
}
