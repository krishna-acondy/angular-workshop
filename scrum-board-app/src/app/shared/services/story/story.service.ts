import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Story } from '../../models/story';

@Injectable()
export class StoryService {
  url = 'http://localhost:666/api/stories';

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Story[]> {
    return this.httpClient.get<Story[]>(this.url)
      .pipe(
        map(
          (data: any) => data.stories.map(story => Story.fromJson(story))
        )
      );
  }

  create(story: Story): Observable<Story> {
    return this.httpClient.post<Story>(this.url, story)
      .pipe(
        map((data: any) => Story.fromJson(data.story))
      );
  }

  update(story: Story): Observable<Story> {
    return this.httpClient.put<Story>(`${this.url}/${story.id}`, story)
      .pipe(
        map((data: any) => Story.fromJson(data.story))
      );
  }
}
