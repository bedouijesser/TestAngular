import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input() news: 
    {
      message: string,
      created_at: number
    }
  @Input() index: number;

  diffTime: string = '';
  
  constructor() { }
  
  ngOnInit(): void {
    const timeNow = new Date().getTime();
    let timeDifference = Math.round(((timeNow - this.news.created_at)/1000/60));
    
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
