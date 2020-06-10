import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  diffTime: string;
  newsList: {
    message: string,
    created_at: number
  }[] = [
      {message: 'You can emit news for every one to hear', created_at: new Date().getTime()},
      {message: 'This is not yet complete but think of the possibilities', created_at: new Date().getTime()},
      {message: 'Another test', created_at: new Date().getTime()},
      {message: 'this.works == true', created_at: new Date().getTime()},
      {message: 'you can switch the page', created_at: new Date().getTime()},
      
    ]
  constructor() { }

  ngOnInit(): void {
    const timeNow = new Date().getTime();
    let i = 0;
    let timeDifference = Math.round(((timeNow - this.newsList[i].created_at)/1000/60));
    
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

