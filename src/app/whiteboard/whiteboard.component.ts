import {Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewRef} from '@angular/core';
import {FusenService} from '../fusen/fusen.service';
import {FusenComponent, InteractionInterface} from '../fusen/fusen.component';
import {Fusen} from '../fusen/fusen';
import {FusenDirective} from '../fusen/fusen.directive';
import {FusenData} from '../fusen/fusen-data';
import {Observable} from 'rxjs';
// import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.scss']
})
export class WhiteboardComponent implements OnInit, InteractionInterface {
  @ViewChild(FusenDirective, {static: true}) fusenHost: FusenDirective;

  // fusenData: Observable<FusenData[]> = this.firestore.collection<FusenData>('whiteboards/hoge/stickynotes').valueChanges();
  componentsReferences: ComponentRef<FusenComponent>[] = [];
  
  constructor(
    private fusenService: FusenService,
    private componentFactoryResolver: ComponentFactoryResolver,
    // private firestore: AngularFirestore
  ) { }

  ngOnInit() {
    this.loadFusen();
  }

  loadFusen() {
    // this.fusenData.subscribe(data => data.forEach((fusen) => {
    //   const componentFactory = this.componentFactoryResolver.resolveComponentFactory(FusenComponent);
    //   const viewContainerRef = this.fusenHost.viewContainerRef;
    //   const componentRef: ComponentRef<FusenComponent> = viewContainerRef.createComponent(componentFactory);
    //   componentRef.instance.compInteraction = this;
    //   this.componentsReferences.push(componentRef);
    // }));
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
    
    // Todo: データベースから削除
  }
  
  createFusen() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(FusenComponent);
    const viewContainerRef = this.fusenHost.viewContainerRef;
    const componentRef: ComponentRef<FusenComponent> = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.compInteraction = this;
    this.componentsReferences.push(componentRef);
    console.log(this.componentsReferences);
    
    // Todo: データベースへ追加
  }
}
