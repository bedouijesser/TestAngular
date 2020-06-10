import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChatroomService } from './chatroom.service';
import { Chat } from './chatroom.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit, OnDestroy {
  messageForm: FormGroup;
  currRoom: string = "lobby";
  chats: Chat[];
  private subscription: Subscription;
  
  constructor(private chatroomService: ChatroomService) { }
  


  ngOnInit(): void {
    
    this.messageForm = new FormGroup ({
      user_msg: new FormControl(null, Validators.required)
    })
    
    this.chats = this.chatroomService.getChats(this.currRoom);
    this.subscription = this.chatroomService.chatsChanged
      .subscribe(
        (chats: Chat[]) => {
          this.chats = chats;
          console.log(this.chats);
        }
      );
  }
  
  onAddMsg(){
    console.log(this.messageForm.value.user_msg);
    this.chatroomService.addMsg(
      this.currRoom,
      this.messageForm.value.user_msg)
  }

  onSubmit(){
    this.messageForm.reset();
  }

  onRoomClick(event: MouseEvent ){
    // console.log((<HTMLElement>event.srcElement).textContent)
    switch ((<HTMLElement>event.srcElement).textContent) {
      
      case '#lobby':

        this.currRoom= 'lobby';
        break;
      case '#music':

        this.currRoom= 'music';
        break;
      case '#mimies':

        this.currRoom= 'mimies';
        break;
      case '#hidoras':

        this.currRoom= 'hidoras';
        break;
      case '#spandex':

        this.currRoom= 'spandex';
        break;
      
    }
    this.chats = this.chatroomService.getChats(this.currRoom);

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
