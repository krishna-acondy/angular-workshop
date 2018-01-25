import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoryService } from './shared/services/story/story.service';
import { ScrumBoardComponent } from './scrum-board/scrum-board.component';
import { StoryComponent } from './scrum-board/story/story.component';
import { MatCardModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    ScrumBoardComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [
    StoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
