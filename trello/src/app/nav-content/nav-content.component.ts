import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {AddCardModalComponent} from "../add-card-modal/add-card-modal.component";
import { Tasks, List, Card } from '../models/card.model';

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

  constructor(public dialog: MatDialog) {
    this.tasks = [
      {
        name: "To Do",
        class:'to-do',
        cards: [
          {
            title: 'Making A New Trend In Poster',
            deadline: '12 Dec 2018',
            storypoints: '5/24'
          },
          {
            title: 'Creating Remarkable',
            deadline: '02 Mar 2018',
            storypoints: '0/17'
          },
          {
            title: '6 Powerful Tips',
            deadline: '13 Jun 2018',
            storypoints: '12/16'
          },
          {
            title: 'Advertisers Embrace Rich Media',
            deadline: '28 Apr 2018',
            storypoints: '0/11'
          },
        ]
      },

      {
        name: "Progress",
        class:'in-progress',
        cards: [
          {
            title: 'Advertising Outdoors',
            deadline: '27 Apr 2018',
            storypoints: '0/12'
          },
          {
            title: 'Manufacturing Equipment',
            deadline: '28 Apr 2018',
            storypoints: '3/15'
          },
          {
            title: 'Advertising Outdoors',
            deadline: '28 Apr 2018',
            storypoints: '8/16'
          },
          {
            title: "Truck Side Advertising Isn't it time",
            deadline: '28 Apr 2018',
            storypoints: '4/19'
          },
          {
            title: "Importance Of The Custom Company",
            deadline: '29 Apr 2018',
            storypoints: '3/12'
          },
        ]
      },

      {
        name: "Done",
        class:'done',
        cards: [
          {
            title: 'Creative Outdoor Ads',
            deadline: '27 Apr 2018',
            storypoints: '12/12'
          },
          {
            title: 'Promotional Advertising Specialty',
            deadline: '28 Apr 2018',
            storypoints: '4/14'
          },
          {
            title: 'Search Engine Optimization',
            deadline: '28 Apr 2018',
            storypoints: '6/16'
          },
        ]
      }
    ]
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
