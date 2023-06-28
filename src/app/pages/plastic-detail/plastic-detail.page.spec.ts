import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { PlasticDetailPage } from './plastic-detail.page';

describe('PlasticDetailPage', () => {
  let component: PlasticDetailPage;
  let fixture: ComponentFixture<PlasticDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlasticDetailPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PlasticDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
