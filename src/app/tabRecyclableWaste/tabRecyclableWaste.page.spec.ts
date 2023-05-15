import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabRecyclableWastePage } from './tabRecyclableWaste.page';

describe('TabRecylableWastePage', () => {
  let component: TabRecyclableWastePage;
  let fixture: ComponentFixture<TabRecyclableWastePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabRecyclableWastePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabRecyclableWastePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
