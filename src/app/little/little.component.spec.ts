import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleComponent } from './little.component';

describe('LittleComponent', () => {
  let component: LittleComponent;
  let fixture: ComponentFixture<LittleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LittleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LittleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
