# EUDI-Compatible Sports Wallet - Verifier Frontend

This project is a proof of concept to show the feasibility of applying EUDI Wallet standards to the decentralized nature of credentials in regulated sports. This project was developed under the scope of [W3C OpenAthletics Community Group](https://www.w3.org/community/opentrack/) and motivated by the outcomes of [AthTech'25](https://athtech.run/2025). The implementation is an adaptation of the [official EUDI Android Wallet reference app](https://github.com/eu-digital-identity-wallet/).

In this project you can find new document definitions required to implement the main [use cases and scenarios for sports credentials](https://www.w3.org/community/opentrack/2026/04/03/use-cases-of-decentralized-sports-credentials/).    


## Related repositories

If you want to test or reuse this project, just use the existing servers deployed or get all the software components in the following repositories:

* WALLET NATIVE APP
  * Wallet for Android: https://github.com/espinr/eudi-app-android  
  * Backend for the Wallet: https://github.com/espinr/eudi-srv-wallet-provider

* VERIFIER (PROXIMITY)
  * Verifier for Android (Based on Multipaz): https://github.com/espinr/eudi-app-multiplatform-verifier-ui

* ISSUANCE SERVICE:
  * Status list server: https://github.com/espinr/eudi-srv-statuslist-py
  * OIDC server: https://github.com/espinr/eudi-srv-issuer-oidc-py
  * APIs for the backend: https://github.com/espinr/eudi-srv-web-issuing-eudiw-py
  * Frontend: https://github.com/espinr/eudi-srv-web-issuing-frontend-eudiw-py

* ONLINE VERIFICATION SERVICE:
  * Backend APIs: https://github.com/espinr/eudi-srv-web-verifier-endpoint
  * Frontend (this repo): https://github.com/espinr/eudi-web-verifier

The issuance and verification services can be deployed easily using Docker Compose. 

## Issuance service orchestration using `docker-compose`

For an easy deployment, this project can be configured using Docker and `docker-compose` in particular.

### Organization of directories and services

The server would require a structure of directories with the content of the issuance-related repositories listed above, including: 

```
docker                            // docker-compose.yml and HTTP server configuration
eudi-srv-web-verifier-endpoint    // backend
eudi-web-verifier                 // frontend
```

`docker/` includes the `docker-compose.yml` file and HTTP server configuration, including the SSL certificate.

```
docker-compose.yaml
haproxy.conf
haproxy.pem
```

### `docker-compose.yml` 

```
version: '3.3'
services:
  verifier:
    # Local image must be built with `./gradlew bootBuildImage` in the eudi-srv-web-verifier-endpoint project
    image: net.openathletics.eudi/eudi-srv-web-verifier-endpoint:latest
    container_name: verifier-backend
    ports:
      - "8080:8080"
    environment:
      VERIFIER_PUBLICURL: "https://verifier.example.org"
      VERIFIER_RESPONSE_MODE: "DirectPost"
      VERIFIER_ORIGINALCLIENTID: "verifier"
      VERIFIER_CLIENTIDPREFIX: "pre-registered"

  verifier-ui:
    #image: ghcr.io/eu-digital-identity-wallet/eudi-web-verifier:v0.9.1
    build: ../eudi-web-verifier/
    container_name: verifier-ui
    ports:
      - "4300:4300"
    environment:
      - DOMAIN_NAME=""
      - HOST_API="https://verifier.example.org"
  
  haproxy:
    image: haproxy:2.7.2
    container_name: haproxy
    ports:
      - "443:443"
    volumes:
      - ./haproxy.conf:/usr/local/etc/haproxy/haproxy.cfg
      - ./haproxy.pem:/etc/ssl/certs/mysite.pem
```


----

:heavy_exclamation_mark: **Important!** For more information about the base of the original project, please read the [EUDI Wallet Reference Implementation project description](https://github.com/eu-digital-identity-wallet/.github/blob/main/profile/reference-implementation.md)


[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)


## About the Verifier Frontend 

This is a WEB UI that provides functionality to interact with the Verifier/RP trusted end-point implemented [here](https://github.com/eu-digital-identity-wallet/eudi-srv-web-verifier-endpoint-23220-4-kt).
Another way to think of this application is that it represents an arbitrary application that wants to delegate to the trusted end-point the burden of
interacting with a wallet using OpenId4VP
The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 19.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## How to run for development

You need npm (node version 18.15.0) and [Angular CLI](https://github.com/angular/angular-cli) installed on your machine.

In order to run Verifier UI run the following commands:

```bash
npm install
ng serve --proxy-config src/proxy.conf.json
```
The above command utilizes [proxy.conf.json](src/proxy.conf.json) that proxies the calls to the expected verifier backend service.
Update this file if you want your Verifier UI to point to a locally running verifier backend service.

You can access the application at [http://localhost:4200](http://localhost:4200) 

## Running tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## License

### Third-party component licenses

* [Angular CLI](https://github.com/angular/angular-cli)
* [cbor](https://github.com/hildjj/node-cbor)
* [jwt-decode](https://github.com/auth0/jwt-decode#readme)
* [rxjs](https://github.com/reactivex/rxjs)
* [qrcodejs](https://github.com/llyys/qrcodejs)

### License details

Copyright (c) 2023 European Commission

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
