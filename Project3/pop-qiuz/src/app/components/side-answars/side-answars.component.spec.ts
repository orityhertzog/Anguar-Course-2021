import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideAnswarsComponent } from './side-answars.component';

describe('SideAnswarsComponent', () => {
  let component: SideAnswarsComponent;
  let fixture: ComponentFixture<SideAnswarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideAnswarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideAnswarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
