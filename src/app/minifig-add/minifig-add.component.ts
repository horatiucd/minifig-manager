import { Component, OnInit } from '@angular/core';
import {Minifig} from '../minifig';
import {MinifigService} from '../minifig.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-minifig-add',
  templateUrl: './minifig-add.component.html',
  styleUrls: ['./minifig-add.component.css']
})
export class MinifigAddComponent implements OnInit {

  minifig: Minifig = new Minifig();

  constructor(private minifigService: MinifigService,
              private router: Router) { }

  ngOnInit(): void {
  }

  addMinifig() {
    this.minifigService.addMinifig(this.minifig).subscribe(data => {
      console.log(data);
      this.router.navigate(['/minifig-list']);
    },
    error => console.log(error));
  }

  onSubmit() {
    console.log(this.minifig);
    this.addMinifig();
  }
}
