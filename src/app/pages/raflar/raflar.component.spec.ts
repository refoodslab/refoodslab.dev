import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaflarComponent } from './raflar.component';

describe('RaflarComponent', () => {
  let component: RaflarComponent;
  let fixture: ComponentFixture<RaflarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaflarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaflarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
