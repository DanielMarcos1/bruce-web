import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialproofComponent } from './socialproof.component';

describe('SocialproofComponent', () => {
  let component: SocialproofComponent;
  let fixture: ComponentFixture<SocialproofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialproofComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialproofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
