import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabInfoPage } from './tabInfo.page';

describe('TabInfoPage', () => {
  let component: TabInfoPage;
  let fixture: ComponentFixture<TabInfoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabInfoPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
