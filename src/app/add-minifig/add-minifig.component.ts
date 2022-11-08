import { Component, OnInit } from '@angular/core';
import {Minifig} from '../minifig';
import {MinifigService} from '../minifig.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-minifig',
  templateUrl: './add-minifig.component.html',
  styleUrls: ['./add-minifig.component.css']
})
export class AddMinifigComponent implements OnInit {

  minifig: Minifig = new Minifig();

  constructor(private minifigService: MinifigService,
              private router: Router) { }

  ngOnInit(): void {
  }

  addMinifig() {
    this.minifigService.addMinifig(this.minifig).subscribe(data => {
      console.log(data);
      this.router.navigate(['/minifigs']);
    },
    error => console.log(error));
  }

  onSubmit() {
    console.log(this.minifig);
    this.addMinifig();
  }
}
