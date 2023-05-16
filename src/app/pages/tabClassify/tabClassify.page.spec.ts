import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabClassifyPage } from './tabClassify.page';

describe('TabClassifyPage', () => {
  let component: TabClassifyPage;
  let fixture: ComponentFixture<TabClassifyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabClassifyPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabClassifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
