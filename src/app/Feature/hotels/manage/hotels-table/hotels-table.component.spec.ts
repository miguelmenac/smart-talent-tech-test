import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsTableComponent } from './hotels-table.component';

describe('HotelsTableComponent', () => {
  let component: HotelsTableComponent;
  let fixture: ComponentFixture<HotelsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
