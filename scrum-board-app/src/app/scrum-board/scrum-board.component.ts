import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Status, Story } from '../shared/models/story';
import { StoryService } from '../shared/services/story/story.service';
import { StoryModalComponent } from './story/story-modal/story-modal.component';

@Component({
  selector: 'app-scrum-board',
  templateUrl: './scrum-board.component.html',
  styleUrls: ['./scrum-board.component.scss']
})
export class ScrumBoardComponent implements OnInit {
  stories: Story[] = [];

  constructor(private storyService: StoryService, private matDialog: MatDialog) { }

  ngOnInit() {
    this.getStories();
  }

  getStoriesByStatus(status: string): Story[] {
    return this.stories.filter(story => story.status === status);
  }

  getStories = () => {
    this.storyService.list().subscribe(stories => this.stories = stories);
  }

  createStory() {
    this.matDialog.open(StoryModalComponent, { data: { story: new Story(), callback: this.getStories }});
  }

}
