import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanicoEditarComponent } from './mecanico-editar.component';

describe('MecanicoEditarComponent', () => {
  let component: MecanicoEditarComponent;
  let fixture: ComponentFixture<MecanicoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MecanicoEditarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MecanicoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
