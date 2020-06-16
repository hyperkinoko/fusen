import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[fusen-host]'
})
export class FusenDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }

}
