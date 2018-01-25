import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StoryService } from './story.service';
import { Story } from '../../models/story';

describe('StoryService', () => {
  let httpMock: HttpTestingController;

  const json = {
    stories: [
      {
        createdAt: '2018-01-25T20:42:15.650Z',
        description: 'Test Description',
        id: 8,
        status: 'To Do',
        title: 'Test Title'
      }
    ]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StoryService]
    });

    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([StoryService], (service: StoryService) => {
    expect(service).toBeTruthy();
  }));

  it('should return a list of stories', inject([StoryService], (service: StoryService) => {
    const expectedStories: Story[] = [];
    expectedStories.push(Story.fromJson(json.stories[0]));

    service.list().subscribe(stories => {
      expect(stories).toEqual(expectedStories);
    });

    const request = httpMock.expectOne('http://localhost:666/api/stories');
    request.flush(json);
    httpMock.verify();
  }));
});
