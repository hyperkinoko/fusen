import { Injectable } from '@angular/core';
import {Fusen} from './fusen';
import {FusenComponent} from './fusen.component';
import {FusenData} from './fusen-data';
// import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FusenService {
  // fusenDatas: Observable<any> = this.firestore.collection('fusens').valueChanges();

  constructor(
    // private firestore: AngularFirestore
  ) { }
  
  getFusenComponents() {
    return [
      new Fusen(FusenComponent, {id: 'dddd0001', text: 'ぴよ', colorId: 'yellow', left: 400, top: 500}),
      new Fusen(FusenComponent, {id: 'xxxxdffl', text: 'ふが', colorId: 'blue', left: 0, top: 0}),
    ];
  }
}
