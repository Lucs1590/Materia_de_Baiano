import { Component } from '@angular/core';
import { Client, Message } from 'paho-mqtt';

import 'paho-client/src/mqttws31';
declare const Paho: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public client: Client;
  public text: string;
  public selectedRoomName : string = null;

  messages = {};

  activeRooms = {};

  constructor() {
    this.client = new Paho.MQTT.Client(
      'test.mosquitto.org', 8080, '/ws', 'britau'
    );
    this.client.onMessageArrived = (message: Message) => {
      console.log(message.payloadString);
      const roomName = message.destinationName;
      const room = this.messages[roomName] || [];
      room.push(message.payloadString);
      this.messages[roomName] = room;
      this.activeRooms[message.destinationName] = new Date();
    }
    this.client.connect({
      onSuccess: () => {
        this.client.subscribe('fatec/chat/+')
      }
    });
  }
  title = 'mqttAngular';

  sendMsg(){
    const message = new Paho.MQTT.Message(this.text);
    console.log(message);
    message.destinationName = this.selectedRoomName;
    this.client.send(message);
  }

  getActiveRooms() {
    return Object.keys(this.activeRooms)
  }
}
