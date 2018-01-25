import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StoryService } from './services/story/story.service';
import { StoryServiceMock } from './shared/mocks/story.service.mock';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: StoryService, useClass: StoryServiceMock}
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
