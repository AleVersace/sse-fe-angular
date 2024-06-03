import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SseConnectorService {
  private readonly sseUrl = "http://localhost:5200";
  constructor() { }

  public createEventSource(): Observable<any> {
    const eventSource = new EventSource(this.sseUrl + '/getEvents');
    return new Observable(observer => {
      eventSource.onmessage = event => {
        const message = JSON.parse(event.data);
        observer.next(message);
      }
    });
  }
}
