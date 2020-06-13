import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {FUSEN_COLORS, FusenData} from './fusen-data';

@Component({
  selector: 'app-fusen',
  templateUrl: './fusen.component.html',
  styleUrls: ['./fusen.component.scss']
})
export class FusenComponent implements OnInit {
  @Input() data: FusenData;
  bgColor: string;
  colorAssets = FUSEN_COLORS;

  constructor() { }

  ngOnInit() {
    this.bgColor = this.colorAssets.find(c => c.id === this.data.colorId).colorCode;
  }
  
  changeColor(color: string) {
    this.bgColor = color;
  }
  
  delete() {
  
  }

}
