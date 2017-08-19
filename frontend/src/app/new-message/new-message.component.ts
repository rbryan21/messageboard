import { Component } from '@angular/core';
import { WebService } from '../services/web.service';

@Component({
  selector: 'new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent {

  constructor(private webService: WebService) { }

  message = {
    owner: "test",
    text: ""
  };

  post() {
    this.webService.postMessage(this.message);
  }

}
