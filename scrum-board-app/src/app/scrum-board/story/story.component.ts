import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Story } from '../../shared/models/story';
import { StoryModalComponent } from './story-modal/story-modal.component';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  @Input()
  story: Story;

  @Output()
  storyUpdated = new EventEmitter();

  constructor(private matDialog: MatDialog) { }

  ngOnInit() {
  }

  private toKebabCase(value: string): string {
    return value.toLocaleLowerCase().replace(/ /g, '-');
  }

  emitEvent = () => {
    this.storyUpdated.emit();
  }

  openModal(story) {
    const clone = new Story();
    Object.assign(clone, story);
    this.matDialog.open(StoryModalComponent, { data: { story: clone, callback: this.emitEvent } });
  }
}
