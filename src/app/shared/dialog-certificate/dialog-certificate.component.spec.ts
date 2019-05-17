import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCertificateComponent } from './dialog-certificate.component';

describe('DialogCertificateComponent', () => {
  let component: DialogCertificateComponent;
  let fixture: ComponentFixture<DialogCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
