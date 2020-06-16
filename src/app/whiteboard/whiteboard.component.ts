import {Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewRef} from '@angular/core';
import {FusenService} from '../fusen/fusen.service';
import {FusenComponent, InteractionInterface} from '../fusen/fusen.component';
import {Fusen} from '../fusen/fusen';
import {FusenDirective} from '../fusen/fusen.directive';
import {FusenData} from '../fusen/fusen-data';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.scss']
})
export class WhiteboardComponent implements OnInit, InteractionInterface {
  @ViewChild(FusenDirective, {static: true}) fusenHost: FusenDirective;

  fusenData: Observable<FusenData[]> = this.firestore.collection<FusenData>('whiteboards/hoge/stickynotes').valueChanges();
  componentsReferences: ComponentRef<FusenComponent>[] = [];
  
  constructor(
    private fusenService: FusenService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
    this.loadFusen();
  }

  loadFusen() {
    this.fusenData.subscribe(data => {
      
      data.forEach((fusen) => {
        if (!this.componentsReferences.find(ref => ref.instance.id === fusen.id)) {
          const componentFactory = this.componentFactoryResolver.resolveComponentFactory(FusenComponent);
          const viewContainerRef = this.fusenHost.viewContainerRef;
          const componentRef: ComponentRef<FusenComponent> = viewContainerRef.createComponent(componentFactory);
          componentRef.instance.id = fusen.id;
          componentRef.instance.compInteraction = this;
          this.componentsReferences.push(componentRef);
        }
      });
    });
  }
  
  remove(id: string) {
    const vcr = this.fusenHost.viewContainerRef;
    
    if (vcr.length  < 1) {
      return;
    }
    
    const componentRef = this.componentsReferences.find(ref => ref.instance.id === id);
    vcr.remove(vcr.indexOf(componentRef.hostView));
    
    this.componentsReferences = this.componentsReferences.filter(ref => ref.instance.id !== id);
    console.log(this.componentsReferences);
    
    this.firestore.collection('whiteboards/hoge/stickynotes').doc(id).delete();
  }
  
  createFusen() {
    const id = this.firestore.createId();
    const fusen: FusenData = {
      id: id,
      left: 10,
      text: '',
      top: 10,
      colorId: 'red'
    };
    this.firestore.collection('whiteboards/hoge/stickynotes').doc(id).set(fusen);
  }
}
