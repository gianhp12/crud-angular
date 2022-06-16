import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Observable <Course[]>;
  displayedColumns = ['cpf','nome','email','telefone'];
  // coursesService: CoursesService;

  

  constructor( private coursesService: CoursesService) {
   // this.coursesService = new CoursesService();
    this.courses = this.coursesService.list();
  }

  ngOnInit(): void {
  }

}
