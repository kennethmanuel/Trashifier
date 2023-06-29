import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlasticDetailModalPage } from './plastic-detail-modalpage.page';

describe('PlasticDetailModalpagePage', () => {
  let component: PlasticDetailModalPage;
  let fixture: ComponentFixture<PlasticDetailModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlasticDetailModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
