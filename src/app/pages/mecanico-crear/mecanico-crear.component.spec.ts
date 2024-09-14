import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanicoCrearComponent } from './mecanico-crear.component';

describe('MecanicoCrearComponent', () => {
  let component: MecanicoCrearComponent;
  let fixture: ComponentFixture<MecanicoCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MecanicoCrearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MecanicoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
