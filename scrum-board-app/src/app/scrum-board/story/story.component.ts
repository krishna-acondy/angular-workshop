import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Story } from '../../shared/models/story';


@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  @Input()
  story: Story;

  constructor() { }

  ngOnInit() {
  }

  private toKebabCase(value: string): string {
    return value.toLocaleLowerCase().replace(/ /g, '-');
  }

}
