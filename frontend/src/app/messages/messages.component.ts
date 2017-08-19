import { Component, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private webService: WebService, private route: ActivatedRoute) { }

  ngOnInit() {
    var name = this.route.snapshot.params.name;
    this.webService.getMessages(name);
  }

}
