import { Component } from '@angular/core';
import { StoryService } from './shared/services/story/story.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private storyService: StoryService) {
    this.storyService.list().subscribe(stories => console.table(stories));
  }
}
