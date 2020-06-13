import { Injectable } from '@angular/core';
import {Fusen} from './fusen';
import {FusenComponent} from './fusen.component';
import {FUSEN_COLORS} from './fusen-data';

@Injectable({
  providedIn: 'root'
})
export class FusenService {

  constructor() { }
  
  getFusenComponents() {
    return [
      new Fusen(FusenComponent, {text: 'ほげ', colorId: 'yellow'}),
      new Fusen(FusenComponent, {text: 'ふが', colorId: 'blue'}),
    ];
  }
}
