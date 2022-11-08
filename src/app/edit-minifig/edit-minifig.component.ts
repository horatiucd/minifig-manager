import { Component, OnInit } from '@angular/core';
import {MinifigService} from '../minifig.service';
import {Minifig} from '../minifig';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-minifig',
  templateUrl: './edit-minifig.component.html',
  styleUrls: ['./edit-minifig.component.css']
})
export class EditMinifigComponent implements OnInit {

  id: number;
  minifig: Minifig;

  constructor(private minifigService: MinifigService,
              private router: Router,
              private activetedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activetedRoute.snapshot.params.id;
    this.minifig = this.minifigService.getMinifig(this.id).subscribe(data => {
      this.minifig = data;
    },
      error => console.log(error));
  }

  onSubmit() {
    this.minifigService.editMinifig(this.minifig).subscribe(data => {
        this.router.navigate(['/minifigs']);
    },
      error => console.log(error));
  }
}
