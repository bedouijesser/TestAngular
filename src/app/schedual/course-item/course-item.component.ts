import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course;
  @Input() index: number;
  
  bgcolor = "teal";

  constructor() { }


  ngOnInit(): void {
    this.bgcolor = this.course.type == 'Cour' ? 'green' : this.course.type == 'TP'? 'grey' : "teal";
  }
 
}
