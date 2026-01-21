import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';
import {NavigateService} from '@core/services/navigate.service';
import {NavigationEnd, Router} from '@angular/router';
import {BodyAction} from '@shared/elements/body-actions/models/BodyAction';
import {PRESENTATION_ACTIONS} from '@core/constants/pages-actions';
import {ActionCode} from '@shared/elements/body-actions/models/ActionCode';
import {VerifierEndpointService} from "@core/services/verifier-endpoint.service";
import {TransactionInitializationRequest} from "@core/models/TransactionInitializationRequest";
import { DataService } from '@app/core/services/data-service';
import predefinedPresentationJson from '../../../../assets/vcp-registration.json' ;

@Component({
    selector: 'vc-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class HomeComponent implements OnInit, OnDestroy {

  destroy$ = new Subject();
  actions: BodyAction[] = PRESENTATION_ACTIONS;
  vcpPredefinedJson: JSON = JSON.parse("{}");

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly router: Router,
    private readonly navigateService: NavigateService,
    private readonly verifierEndpointService: VerifierEndpointService
  ) {
  }

  ngOnDestroy(): void {
    this.destroy$.next('');
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        takeUntil(this.destroy$),
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event) => {
        if (event.url.includes('sports-request/create')) {
          this.actions = PRESENTATION_ACTIONS;
          this.changeDetectorRef.detectChanges();
        }
      });
  }

  runActions(data: BodyAction) {
    if (data.code === ActionCode.BACK) {
      this.navigateService.goBack();
    } else if (data.code === ActionCode.NEXT) {
      this.initializePresentationTransactionPredefined();
    }
  }

  initializePresentationTransactionPredefined() {
    let request = predefinedPresentationJson as TransactionInitializationRequest;
    this.verifierEndpointService.initializeTransaction(request, (_) => {
      this.hideNextStep();
      this.navigateService.navigateTo('/sports-request/invoke');
      this.changeDetectorRef.detectChanges();
    });
  }

  private hideNextStep() {
    this.actions = this.actions.filter((item: BodyAction) => item.code !== ActionCode.NEXT);
  }
}
