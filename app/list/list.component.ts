import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  userLists: any;
  constructor(public rest: MyserviceService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.rest.getUsers().subscribe((data: {}) => {
      this.userLists = data;
    });
  }
}