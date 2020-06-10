import { Component, OnInit, Input } from '@angular/core';
import { Chat } from '../chatroom.model';

@Component({
  selector: 'app-chatroom-msg',
  templateUrl: './chatroom-msg.component.html',
  styleUrls: ['./chatroom-msg.component.css']
})
export class ChatroomMsgComponent implements OnInit {
  @Input() msg: Chat;
  @Input() index: number;

  diffTime: string = '';
  constructor() { }
  

  ngOnInit(): void {
    const timeNow = new Date().getTime();
        let timeDifference = Math.round(((timeNow - this.msg.created_at)/1000/60));
        
        // console.log(timeDifference,timeNow,this.msg.created_at,this.diffTime)
        
        if (timeDifference > 60) {
            this.diffTime = Math.round(timeDifference / 60) + ' hours';
            
        } else {
            this.diffTime += timeDifference + ' minutes'
            console.log()
        }
        // console.log("this works")
  }

}
