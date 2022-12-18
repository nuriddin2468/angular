import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {

  form = this.fb.group({
    title: [],
    description: [],
    duration: [],
    date: [],
    authors: []
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
