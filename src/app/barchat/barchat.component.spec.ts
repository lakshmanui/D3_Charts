import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchatComponent } from './barchat.component';

describe('BarchatComponent', () => {
  let component: BarchatComponent;
  let fixture: ComponentFixture<BarchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
