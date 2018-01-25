import { Story, Status } from './story';

describe('Story', () => {
  it('Should create itelf from JSON', () => {
    const json = {
      createdAt: '2018-01-25T20:42:15.650Z',
      description: 'Test Description',
      id: 8,
      status: 'To Do',
      title: 'Test Title'
    };

    const story = Story.fromJson(json);

    expect(story instanceof Story).toBeTruthy();
    expect(story.id).toEqual(8);
    expect(story.status).toEqual(Status.ToDo);
    expect(story.title).toEqual('Test Title');
    expect(story.description).toEqual('Test Description');
    expect(story.createdAt.toISOString()).toEqual(json.createdAt);
  });
});
