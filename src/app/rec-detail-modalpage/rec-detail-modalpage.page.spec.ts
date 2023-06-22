import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecDetailModalpagePage } from './rec-detail-modalpage.page';

describe('RecDetailModalpagePage', () => {
  let component: RecDetailModalpagePage;
  let fixture: ComponentFixture<RecDetailModalpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecDetailModalpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
