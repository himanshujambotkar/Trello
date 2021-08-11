import { tasks } from "../models/data";
import {Injectable} from "@angular/core";
import { Tasks, Card } from "../models/card.model";

@Injectable()

export class CardService {
  private tasks:Tasks = tasks;

  getTasksData() : Tasks {
    return this.tasks;
  }

  updateCard(index, title, storypoints, deadline ):void {
    let newTask = {
      title: title,
      deadline: deadline,
      storypoints: storypoints
    };

    this.tasks[index].cards.push(newTask);
  }
}




