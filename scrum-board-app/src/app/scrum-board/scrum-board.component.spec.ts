import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumBoardComponent } from './scrum-board.component';
import { StoryService } from '../shared/services/story/story.service';
import { StoryServiceMock } from '../shared/mocks/story.service.mock';

describe('ScrumBoardComponent', () => {
  let component: ScrumBoardComponent;
  let fixture: ComponentFixture<ScrumBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrumBoardComponent ],
      providers: [
        { provide: StoryService, useClass: StoryServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
