import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {formatDate} from "@angular/common";
import { CardService} from "../services/card.service";

@Component({
  selector: 'app-add-card-modal',
  templateUrl: './add-card-modal.component.html',
  styleUrls: ['./add-card-modal.component.scss']
})
export class AddCardModalComponent implements OnInit {
  taskName:string[] = [];
  storyPoints:string[] = [];
  deadlineDate:string[] = [];
  showError: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public dataClass: string, private cardService:CardService,
              private dialogRef: MatDialogRef<AddCardModalComponent>) {
  }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close();
  }

  createCard = (taskName, storyPoints, deadlineDate) => {
    if(taskName.length !== 0 && storyPoints.length !== 0 && deadlineDate.length !== 0){
      const format = 'dd/MM/yyyy';
      const myDate = deadlineDate;
      const locale = 'en-US';
      const deadlineFormattedDate = formatDate(myDate, format, locale);

      let cards =  this.cardService.getTasksData();
      let listIndex;

      for(let [i,list] of cards.entries()) {
        if (cards[i].class == this.dataClass) {
          listIndex = i;
          break;
        }
      }
      this.closeDialog();
      this.cardService.updateCard(listIndex,taskName,storyPoints, deadlineFormattedDate);
      return;
    } else {
      this.showError = true;
      return false;
    }
  }
}
