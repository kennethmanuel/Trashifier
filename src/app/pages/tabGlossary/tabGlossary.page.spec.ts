import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabGlossaryPage } from './tabGlossary.page';

describe('TabGlossaryPage', () => {
  let component: TabGlossaryPage;
  let fixture: ComponentFixture<TabGlossaryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabGlossaryPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabGlossaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
