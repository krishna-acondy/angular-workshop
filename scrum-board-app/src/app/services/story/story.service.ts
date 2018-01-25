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
      .pipe(map((data: any) => data.stories));
  }
}
