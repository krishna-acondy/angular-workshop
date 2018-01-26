import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Status } from '../../../shared/models/story';
import { StoryService } from '../../../shared/services/story/story.service';

@Component({
  selector: 'app-story-modal',
  templateUrl: './story-modal.component.html',
  styleUrls: ['./story-modal.component.scss']
})
export class StoryModalComponent {
  statuses = Object.keys(Status).map(status => Status[status]);

  constructor(
    public dialogRef: MatDialogRef<StoryModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private storyService: StoryService) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick() {
    const request = this.data.story.id
      ? this.storyService.update(this.data.story)
      : this.storyService.create(this.data.story);
    request.subscribe((data) => {
      this.data.callback();
      this.dialogRef.close();
    });
  }

}
