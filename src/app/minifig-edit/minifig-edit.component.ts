import { Component, OnInit } from '@angular/core';
import {MinifigService} from '../minifig.service';
import {Minifig} from '../minifig';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-minifig-edit',
  templateUrl: './minifig-edit.component.html',
  styleUrls: ['./minifig-edit.component.css']
})
export class MinifigEditComponent implements OnInit {

  id: number;
  minifig: Minifig;

  constructor(private minifigService: MinifigService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.minifig = this.minifigService.getMinifig(this.id).subscribe(data => {
      this.minifig = data;
    },
      error => console.log(error));
  }

  onSubmit() {
    this.minifigService.editMinifig(this.minifig).subscribe(data => {
        this.router.navigate(['/minifig-list']);
    },
      error => console.log(error));
  }
}
