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
    this.storyService.update(this.data).subscribe(() => this.dialogRef.close());
  }

}
