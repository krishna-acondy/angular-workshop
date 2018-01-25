import { Story } from '../models/story';
import { of } from 'rxjs/observable/of';

const story = Story.fromJson({
  createdAt: '2018-01-25T20:42:15.650Z',
  description: 'Test Description',
  id: 8,
  status: 'To Do',
  title: 'Test Title'
});
export class StoryServiceMock {
  list() {
    return of([story]);
  }
}
