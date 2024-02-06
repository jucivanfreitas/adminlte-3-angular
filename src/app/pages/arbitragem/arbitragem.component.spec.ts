import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitragemComponent } from './arbitragem.component';

describe('ArbitragemComponent', () => {
  let component: ArbitragemComponent;
  let fixture: ComponentFixture<ArbitragemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArbitragemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArbitragemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
