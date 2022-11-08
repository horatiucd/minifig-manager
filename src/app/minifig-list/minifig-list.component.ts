import { Component, OnInit } from '@angular/core';
import {Minifig} from '../minifig';
import {MinifigService} from '../minifig.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-minifig-list',
  templateUrl: './minifig-list.component.html',
  styleUrls: ['./minifig-list.component.css']
})
export class MinifigListComponent implements OnInit {

  minifigs: Minifig[];

  constructor(private minifigService: MinifigService,
              private router: Router) { }

  ngOnInit(): void {
    this.getMinifigs();
  }

  private getMinifigs() {
    this.minifigService.getMinifigs().subscribe(data => {
      this.minifigs = data;
    });
  }

  viewMinifig(id: number) {
    this.router.navigate(['view-minifig', id]);
  }

  editMinifig(id: number) {
    this.router.navigate(['edit-minifig', id]);
  }

  deleteMinifig(id: number) {
    this.minifigService.deleteMinifig(id).subscribe(data => {
      this.getMinifigs();
    },
      error => console.log(error));
  }
}
