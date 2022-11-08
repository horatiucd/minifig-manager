import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Minifig} from './minifig';

@Injectable({
  providedIn: 'root'
})
export class MinifigService {

  private minifigsUrl = 'http://localhost:8082/minifig-manager/api/v1/minifigs';

  constructor(private httpClient: HttpClient) {  }

  getMinifigs(): Observable<Minifig[]> {
    return this.httpClient.get<Minifig[]>(`${this.minifigsUrl}`);
  }
}
