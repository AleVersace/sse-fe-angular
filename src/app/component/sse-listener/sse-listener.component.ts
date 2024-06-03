import {Component, OnDestroy, signal} from '@angular/core';
import {SseConnectorService} from "../../service/sse-connector/sse-connector.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-sse-listener',
  standalone: true,
  imports: [],
  templateUrl: './sse-listener.component.html',
  styleUrl: './sse-listener.component.scss'
})
export class SseListenerComponent implements OnDestroy {
  public subscription = new Subscription();
  public streamedText = signal('');

  constructor(private sseConnector: SseConnectorService) {
    const eventSub = this.sseConnector.createEventSource().subscribe((message: any) => {
      this.streamedText.update(oldMessage => oldMessage + '<br>' + message.payload);
    });
    this.subscription.add(eventSub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
