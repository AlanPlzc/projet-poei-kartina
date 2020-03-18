import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeValideeComponent } from './commande-validee.component';

describe('CommandeValideeComponent', () => {
  let component: CommandeValideeComponent;
  let fixture: ComponentFixture<CommandeValideeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeValideeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeValideeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});