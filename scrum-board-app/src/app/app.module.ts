import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoryService } from './shared/services/story/story.service';
import { ScrumBoardComponent } from './scrum-board/scrum-board.component';
import { StoryComponent } from './scrum-board/story/story.component';
import { MatCardModule, MatDialogModule, MatInputModule, MatSelectModule, MatButtonModule } from '@angular/material';
import { StoryModalComponent } from './scrum-board/story/story-modal/story-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ScrumBoardComponent,
    StoryComponent,
    StoryModalComponent
  ],
  entryComponents: [
    StoryModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [
    StoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
