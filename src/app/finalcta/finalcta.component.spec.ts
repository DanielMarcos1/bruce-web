import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalctaComponent } from './finalcta.component';

describe('FinalctaComponent', () => {
  let component: FinalctaComponent;
  let fixture: ComponentFixture<FinalctaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalctaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalctaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
