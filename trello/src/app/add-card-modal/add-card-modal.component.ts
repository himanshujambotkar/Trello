import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-add-card-modal',
  templateUrl: './add-card-modal.component.html',
  styleUrls: ['./add-card-modal.component.scss']
})
export class AddCardModalComponent implements OnInit {
  taskName:any[] = [];
  storyPoints:any[] = [];
  deadlineDate:any[] = [];
  showError: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public dataClass: object) {
  }

  ngOnInit(): void {
  }

  createCard = (taskName, storyPoints, deadlineDate) => {
    if(taskName.length !== 0 && storyPoints.length !== 0 && deadlineDate.length !== 0){
      console.log(taskName, storyPoints, deadlineDate, this.dataClass);
      return;
    } else {
      this.showError = true;
      return false;
    }
  }
}
