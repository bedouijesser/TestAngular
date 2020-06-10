import { Injectable } from '@angular/core';
import { Chatroom, Chat } from './chatroom.model';
import { AuthService } from '../auth/auth.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatroomService {
  currRoom: Chatroom;
  user: Chatroom;
  users: Chatroom[];
  chats: Chat[] = [
    new Chat(this.authService.user.userId,'lobby','hello there', new Date().getTime()),
    new Chat(2,'lobby','General Kenobi', new Date().getTime()),
    new Chat(this.authService.user.userId,'lobby',"Yes ... 'tis I !!", new Date().getTime()),
    new Chat(2,'lobby','... I know ... just said that...', new Date().getTime()),
  ]
  chatsChanged = new Subject<Chat[]>()


  constructor(private authService: AuthService) { }
  
  addMsg (roomId: string, message: string) {
    
    //  creating a new message format
		
    const chat = new Chat(
      this.authService.user.userId,
      roomId,
      message,
      new Date().getTime()
    );
    this.chats.push(chat);
    this.chatsChanged.next(this.chats.filter(chat => chat.roomId == roomId).slice())
    
    //  save the msg to the DB
    const response = 'Fancy Sql Code here'
    return response;
  }

  getChats(roomId: string) {
    return this.chats.filter(chat=> chat.roomId == roomId);

  }

  updateRoom(newRoom) {
    this.currRoom = newRoom;
  }

// add new user to the DB

// var counter = 0; // current number of Anony users on the db
// var defUser; // making a unique "Anony" user

chatInit() {

  // check local storage for an existing account
  if (!(localStorage.getItem("user"))) {

    // making a new instence for a user 
    this.user = new Chatroom("lobby", this.authService.user.userId);
    this.addMsg(this.user.roomId , "")
    console.log('user added');

    // set the user name to local storage under the "user" key
    localStorage.setItem("user", this.authService.user.userId.toString());

  } else {
    this.user = new Chatroom("lobby", localStorage.getItem("user"));
    this.users.splice(this.user.userId,1);
  }  
}

};
