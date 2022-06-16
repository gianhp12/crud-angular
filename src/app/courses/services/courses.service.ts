import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { ArrayDataSource } from '@angular/cdk/collections';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly API = 'http://localhost:8085/api/alunos/47747141866'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      tap(courses => console.log(Array(courses)))
      
    );
  
  }
}
