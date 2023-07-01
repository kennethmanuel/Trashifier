import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecyclecodePage } from './recyclecode.page';

describe('RecyclecodePage', () => {
  let component: RecyclecodePage;
  let fixture: ComponentFixture<RecyclecodePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecyclecodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
