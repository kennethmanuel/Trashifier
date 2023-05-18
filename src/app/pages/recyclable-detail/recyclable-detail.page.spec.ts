import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecyclableDetailPage } from './recyclable-detail.page';

describe('RecyclableDetailPage', () => {
  let component: RecyclableDetailPage;
  let fixture: ComponentFixture<RecyclableDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecyclableDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
