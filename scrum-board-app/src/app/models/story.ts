import * as moment from 'moment';

export enum Status {
  ToDo = 'To Do',
  InProgress = 'In Progress',
  Done = 'Done',
  Flagged = 'Flagged'
}

export class Story {
  id: number;
  title: string;
  description: string;
  status: Status;
  createdAt: moment.Moment;

  public static fromJson(json: any): Story {
    const story = new Story();
    story.id = json.id;
    story.title = json.title;
    story.description = json.description;
    story.status = json.status;
    story.createdAt = moment(json.createdAt);

    return story;
  }
}
