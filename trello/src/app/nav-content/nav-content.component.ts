import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {AddCardModalComponent} from "../add-card-modal/add-card-modal.component";
import { Tasks, Card } from '../models/card.model';
import { CardService} from "../services/card.service";

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss']
})
export class NavContentComponent implements OnInit {
  tasks: any[] = [];
  obj: any[] = [];

  openDialog(obj) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(AddCardModalComponent, {
      width: '480px',
      height: '360px',
      data: obj.class,
    });
  };

  constructor(public dialog: MatDialog, private cardService:CardService) {
    this.tasks = cardService.getTasksData();
  }

  drop(event: CdkDragDrop<Card[]>, listIndex:number) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  ngOnInit(): void {
  }

}
