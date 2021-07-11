import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RoadmapControlComponent} from './roadmap-control.component';

describe('RoadmapControlComponent', () => {
  let component: RoadmapControlComponent;
  let fixture: ComponentFixture<RoadmapControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoadmapControlComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadmapControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
