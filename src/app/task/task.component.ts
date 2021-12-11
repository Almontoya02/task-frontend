import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() nameTask:string | undefined
  @Output() buttonSelected: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onSelectBtn(){
    this.buttonSelected?.emit()
  }


}
