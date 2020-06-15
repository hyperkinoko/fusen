import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {FUSEN_COLORS, FusenData} from './fusen-data';
import {Observable, of} from 'rxjs';
// import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-fusen',
  templateUrl: './fusen.component.html',
  styleUrls: ['./fusen.component.scss']
})
export class FusenComponent implements OnInit {
  id: string;
  // data: Observable<FusenData> = this.firestore.doc<FusenData>('whiteboards/hoge/stickynotes/' + this.id).valueChanges();
  data: Observable<FusenData> = of({
    id: 'sssddddfdfs',
    colorId: 'red',
    left: 0,
    top: 0
  } as FusenData);
  
  compInteraction: InteractionInterface;
  colorAssets = FUSEN_COLORS;
  
  style;

  constructor(
    // private firestore: AngularFirestore
  ) {
  }

  ngOnInit() {
    this.data.subscribe(data => {
      this.style = {
        backgroundColor: this.colorAssets.find(c => c.id === data.colorId).colorCode,
        left: data.left + 'px',
        top: data.top + 'px',
        zIndex: '5'
      };
      
    });
  }
  
  changeColor(color: string) {
    this.style.backgroundColor = color;
  }
  
  remove() {
    this.compInteraction.remove(this.id);
  }

}

export interface InteractionInterface {
  remove(id: string);
}
