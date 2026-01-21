import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsRequestComponent } from './sports-request.component';
import { SharedModule } from '@app/shared/shared.module';

describe('PresentationRequestComponent', () => {
  let component: SportsRequestComponent;
  let fixture: ComponentFixture<SportsRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      // declarations: [ PresentationRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportsRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
