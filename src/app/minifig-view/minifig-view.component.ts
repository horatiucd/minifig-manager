import { Component, OnInit } from '@angular/core';
import {MinifigService} from '../minifig.service';
import {Minifig} from '../minifig';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-minifig-view',
  templateUrl: './minifig-view.component.html',
  styleUrls: ['./minifig-view.component.css']
})
export class MinifigViewComponent implements OnInit {

  id: number;
  minifig: Minifig;

  constructor(private minifigService: MinifigService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.minifig = this.minifigService.getMinifig(this.id).subscribe(data => {
      this.minifig = data;
    },
      error => console.log(error));
  }

}
