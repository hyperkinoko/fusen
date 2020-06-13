import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {FusenService} from '../fusen/fusen.service';
import {FusenComponent} from '../fusen/fusen.component';
import {Fusen} from '../fusen/fusen';
import {FusenDirective} from '../fusen/fusen.directive';

@Component({
  selector: 'app-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.scss']
})
export class WhiteboardComponent implements OnInit {
  fusenComponents: Fusen[];
  @ViewChild(FusenDirective, {static: true}) fusenHost: FusenDirective;
  
  constructor(
    private fusenService: FusenService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.fusenComponents = this.fusenService.getFusenComponents();
    this.loadComponent();
  }

  loadComponent() {
    this.fusenComponents.forEach((fusen) => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(fusen.component);
      const viewContainerRef = this.fusenHost.viewContainerRef;
      const componentRef = viewContainerRef.createComponent(componentFactory);
      componentRef.instance.data = fusen.data;
    });
  }
}
