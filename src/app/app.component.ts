import { Component } from '@angular/core';
import { Stomp } from 'stomp.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularOmeta';

  constructor() {
    var ws = new WebSocket('ws://team2:team2@192.168.1.2/team2vhost/ws');
    var client = Stomp.over(ws);
  
    var on_connect = function() {
      console.log('connected');
      client.subscribe('/queue/hello', function(message) {
        console.log(message);
      });
    };
    var on_error =  function() {
      console.log('error');
    };
    
  }
}

