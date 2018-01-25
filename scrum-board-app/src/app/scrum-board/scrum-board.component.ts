import { Component, OnInit } from '@angular/core';
import { Status, Story } from '../shared/models/story';
import { StoryService } from '../shared/services/story/story.service';

@Component({
  selector: 'app-scrum-board',
  templateUrl: './scrum-board.component.html',
  styleUrls: ['./scrum-board.component.scss']
})
export class ScrumBoardComponent implements OnInit {
  stories: Story[] = [];

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.storyService.list().subscribe(stories => this.stories = stories);
  }

  getStories(status: string): Story[] {
    return this.stories.filter(story => story.status === status);
  }

}
