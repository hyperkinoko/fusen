import { Injectable } from '@angular/core';
import {Fusen} from './fusen';
import {FusenComponent} from './fusen.component';

@Injectable({
  providedIn: 'root'
})
export class FusenService {

  constructor() { }
  
  getFusenComponents() {
    return [
      new Fusen(FusenComponent, {text: 'ほげ'}),
      new Fusen(FusenComponent, {text: 'ふが'}),
    ];
  }
}
