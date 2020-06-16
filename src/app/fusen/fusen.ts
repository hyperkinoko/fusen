import {FusenComponent} from './fusen.component';
import {Type} from '@angular/core';
import {FusenData} from './fusen-data';

export class Fusen {
  constructor(public component: Type<FusenComponent>, public data: FusenData) {}
}
