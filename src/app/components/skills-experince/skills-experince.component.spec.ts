import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsExperinceComponent } from './skills-experince.component';

describe('SkillsExperinceComponent', () => {
  let component: SkillsExperinceComponent;
  let fixture: ComponentFixture<SkillsExperinceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsExperinceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsExperinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
