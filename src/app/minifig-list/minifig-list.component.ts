import { Component, OnInit } from '@angular/core';
import {Minifig} from '../minifig';

@Component({
  selector: 'app-minifig-list',
  templateUrl: './minifig-list.component.html',
  styleUrls: ['./minifig-list.component.css']
})
export class MinifigListComponent implements OnInit {

  minifigs: Minifig[];

  constructor() { }

  ngOnInit(): void {
    this.minifigs = [
      {
        "id": 1,
        "name": "Minifig 1",
        "code": "abc-123"
      },
      {
        "id": 2,
        "name": "Minifig 2",
        "code": "abc-456"
      }
      ];
  }

}
