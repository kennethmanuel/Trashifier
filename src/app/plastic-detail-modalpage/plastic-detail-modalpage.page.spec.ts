import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlasticDetailModalpagePage } from './plastic-detail-modalpage.page';

describe('PlasticDetailModalpagePage', () => {
  let component: PlasticDetailModalpagePage;
  let fixture: ComponentFixture<PlasticDetailModalpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlasticDetailModalpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
