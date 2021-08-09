import { Component, OnInit } from '@angular/core';
import { tasks } from "../models/data";

@Component({
  selector: 'app-add-card-modal',
  templateUrl: './add-card-modal.component.html',
  styleUrls: ['./add-card-modal.component.scss']
})
export class AddCardModalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
}
