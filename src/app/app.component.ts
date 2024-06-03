import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SseListenerComponent} from "./component/sse-listener/sse-listener.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SseListenerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
