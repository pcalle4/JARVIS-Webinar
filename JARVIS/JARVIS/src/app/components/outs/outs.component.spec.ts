import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OutsComponent } from './outs.component';

describe('OutsComponent', () => {
  let component: OutsComponent;
  let fixture: ComponentFixture<OutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
