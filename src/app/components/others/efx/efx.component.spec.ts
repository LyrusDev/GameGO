import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfxComponent } from './efx.component';

describe('EfxComponent', () => {
  let component: EfxComponent;
  let fixture: ComponentFixture<EfxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EfxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EfxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
