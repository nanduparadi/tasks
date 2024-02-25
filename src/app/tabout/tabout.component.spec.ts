import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaboutComponent } from './tabout.component';

describe('TaboutComponent', () => {
  let component: TaboutComponent;
  let fixture: ComponentFixture<TaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
