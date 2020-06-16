import {Component, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {FUSEN_COLORS, FusenData} from './fusen-data';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {delay, map} from 'rxjs/operators';
import {CdkDragEnd, CdkDragExit, CdkDragRelease} from '@angular/cdk/drag-drop';

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
    private firestore: AngularFirestore,
    private elRef: ElementRef
  ) {
  }

  id: string;
  data$: Observable<FusenData>;
  collectionRef = this.firestore.collection('whiteboards/hoge/stickynotes');
  text: string;
  
  ngOnInit() {
    this.data$ = this.collectionRef.doc<FusenData>(this.id).valueChanges();
  
    this.style$ = this.data$.pipe(
      map(data => {
        console.log(data);
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
    this.collectionRef.doc<FusenData>(this.id).update(
      {colorId}
    );
  }
  
  onTextChanged() {
    this.collectionRef.doc<FusenData>(this.id).update(
      {text: this.text}
    );
  }
  
  remove() {
    this.compInteraction.remove(this.id);
  }
  
  drop(event: CdkDragEnd) {
    const elementPosition = event.source.getRootElement().getBoundingClientRect();
    const parentPosition = this.elRef.nativeElement.parentElement.getBoundingClientRect();
   
    const x = elementPosition.x - parentPosition.x;
    const y = elementPosition.y - parentPosition.y;
  
    event.source._dragRef.reset();
  
    this.collectionRef.doc<FusenData>(this.id).update({
      left: x,
      top: y
    });
  }
}

export interface InteractionInterface {
  remove(id: string);
}
