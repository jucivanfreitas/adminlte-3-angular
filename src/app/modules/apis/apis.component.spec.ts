import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIsComponent } from './apis.component';

describe('APIsComponent', () => {
  let component: APIsComponent;
  let fixture: ComponentFixture<APIsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APIsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(APIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
