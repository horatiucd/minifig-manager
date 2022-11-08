import { Component, OnInit } from '@angular/core';
import {MinifigService} from '../minifig.service';
import {Minifig} from '../minifig';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-minifig',
  templateUrl: './view-minifig.component.html',
  styleUrls: ['./view-minifig.component.css']
})
export class ViewMinifigComponent implements OnInit {

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
