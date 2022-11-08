import { Component, OnInit } from '@angular/core';
import {Minifig} from '../minifig';

@Component({
  selector: 'app-add-minifig',
  templateUrl: './add-minifig.component.html',
  styleUrls: ['./add-minifig.component.css']
})
export class AddMinifigComponent implements OnInit {

  minifig: Minifig = new Minifig();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.minifig);
  }
}
