import { Component, OnInit } from '@angular/core';
import {Minifig} from '../minifig';
import {MinifigService} from '../minifig.service';

@Component({
  selector: 'app-minifig-list',
  templateUrl: './minifig-list.component.html',
  styleUrls: ['./minifig-list.component.css']
})
export class MinifigListComponent implements OnInit {

  minifigs: Minifig[];

  constructor(private minifigService: MinifigService) { }

  ngOnInit(): void {
    this.getMinifigs();
  }

  private getMinifigs() {
    this.minifigService.getMinifigs().subscribe(data => {
      this.minifigs = data;
    });
  }
}
