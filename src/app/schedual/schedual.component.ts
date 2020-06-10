import { Component , OnInit, ViewChildren, QueryList } from '@angular/core';
import { SchedualService } from './schedual.service';
import { Course } from './course.model';


declare const M: any;
@Component({
  selector: 'app-schedual',
  templateUrl: './schedual.component.html',
  styleUrls: ['./schedual.component.css']
})
export class SchedualComponent implements OnInit {

  courses: Course[] = this.schedualService.CourseArrMon;

  constructor(private schedualService: SchedualService) {}

  ngOnInit(): void {

    // tabs init
    var matTabs = document.querySelector('.tabs');
    var instance = M.Tabs.init(matTabs, 'swipeable');
    
  }


  onTabClick(event: MouseEvent ){
    // console.log((<HTMLElement>event.srcElement).textContent)
    switch ((<HTMLElement>event.srcElement).textContent) {
      
      case 'Mon':

        this.courses = this.schedualService.CourseArrMon;
        break;

      case 'Tue':

        this.courses = this.schedualService.CourseArrTue;
        break;

      case 'Wed':

        this.courses = this.schedualService.CourseArrWed;
        break;

      case 'Thu':

        this.courses = this.schedualService.CourseArrThu;
        break;

      case 'Fri':

        this.courses = this.schedualService.CourseArrFri;
        break;

      case 'Sat':

        this.courses = this.schedualService.CourseArrSat;
        break;

    }
   }


}
