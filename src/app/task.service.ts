import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Task} from './task.model'
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasksList:Task[]=[]
  httpClient:HttpClient
  constructor(httpClient:HttpClient) { 
    this.httpClient=httpClient
  }

  async addTask(taskdescription:string){
    const task = await this.httpClient.post("http://localhost:4001/task/add",{
      taskdescription
    }).toPromise()

    const json = JSON.parse(JSON.stringify(task))
    console.log({status:json["status"],message:json["message"],data:json["data"]})
    return {status:json["status"],message:json["message"],data:json["data"]}
  }

  async deleteTaskRequest(_id:string){
    const task = await this.httpClient.delete("http://localhost:4001/task/delete-task",{body:{_id}}).toPromise()
    const json = JSON.parse(JSON.stringify(task))
    console.log({status:json["status"],message:json["message"],data:json["data"]})
    return {status:json["status"],message:json["message"],data:json["data"]}
  }
  async getAllTasks(){
    const tasks = await this.getallTasksRequest()
    let tasklist=tasks.data.tasks
    console.log("LISTAS:",this.tasksList)
    for (let index = 0; index < tasklist.length; index++) {
      this.tasksList.push(new Task(tasklist[index].taskdescription,tasklist[index]._id)) 
    }
    
  }

  async getallTasksRequest(){
    const task = await this.httpClient.get("http://localhost:4001/task/alltasks").toPromise();
    const json = JSON.parse(JSON.stringify(task))
    console.log({status:json["status"],message:json["message"],data:json["data"]})
    return {status:json["status"],message:json["message"],data:json["data"]}

  }
}


