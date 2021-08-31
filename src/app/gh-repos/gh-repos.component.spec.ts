import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhReposComponent } from './gh-repos.component';

describe('GhReposComponent', () => {
  let component: GhReposComponent;
  let fixture: ComponentFixture<GhReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhReposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
