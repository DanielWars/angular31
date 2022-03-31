import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleryphotosComponent } from './galeryphotos.component';

describe('GaleryphotosComponent', () => {
  let component: GaleryphotosComponent;
  let fixture: ComponentFixture<GaleryphotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleryphotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleryphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
