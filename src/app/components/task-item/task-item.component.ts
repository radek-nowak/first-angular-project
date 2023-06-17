import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";
import {Task} from "../../models/Task";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit{
  @Input() task: Task
  constructor() {
  }

  ngOnInit(): void {
  }

}
