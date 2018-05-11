import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NahiMillaComponent } from './nahi-milla.component';

describe('NahiMillaComponent', () => {
  let component: NahiMillaComponent;
  let fixture: ComponentFixture<NahiMillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NahiMillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NahiMillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
