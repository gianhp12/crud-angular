import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';
import { ArrayDataSource } from '@angular/cdk/collections';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly API = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      delay(5000),
      tap(courses => console.log(Array(courses)))
      
    );
  
  }
}
