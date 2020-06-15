import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {FUSEN_COLORS, FusenData} from './fusen-data';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {map, switchMap} from 'rxjs/operators';
import {CdkDragEnd} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-fusen',
  templateUrl: './fusen.component.html',
  styleUrls: ['./fusen.component.scss']
})
export class FusenComponent implements OnInit {
  compInteraction: InteractionInterface;
  colorAssets = FUSEN_COLORS;
  
  style$;

  constructor(
    private firestore: AngularFirestore
  ) {
  }

  id: string;
  data$: Observable<FusenData>;
  text: string;
  
  ngOnInit() {
    this.data$ = this.firestore.collection('whiteboards/hoge/stickynotes').doc<FusenData>(this.id).valueChanges();
  
    this.style$ = this.data$.pipe(
      map(data => {
        return {
          backgroundColor: this.colorAssets.find(c => c.id === data.colorId).colorCode,
          left: data.left + 'px',
          top: data.top + 'px',
          zIndex: '5'
        };
      })
    );
    
    this.data$.subscribe(data => {
      this.text = data.text;
    });
  }
  
  changeColor(colorId: string) {
    this.firestore.collection('whiteboards/hoge/stickynotes').doc(this.id).update(
      {colorId}
    );
  }
  
  onTextChanged() {
    this.firestore.collection('whiteboards/hoge/stickynotes').doc(this.id).update(
      {text: this.text}
    );
  }
  
  remove() {
    this.compInteraction.remove(this.id);
  }
  
  drop(event) {
      const element = event.source.getRootElement();
      const boundingClientRect = element.getBoundingClientRect();
      console.log(boundingClientRect);
      // const parentPosition = this.getPosition(element);
      console.log('x: ' + boundingClientRect.left , 'y: ' + boundingClientRect.top);
    }
  
    getPosition(el) {
      let x = 0;
      let y = 0;
      while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        x += el.offsetLeft - el.scrollLeft;
        y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
      }
      console.log('x=' + x + ', y=' + y);
      return { top: y, left: x };
    }
}

export interface InteractionInterface {
  remove(id: string);
}
