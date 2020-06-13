import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fusen',
  templateUrl: './fusen.component.html',
  styleUrls: ['./fusen.component.scss']
})
export class FusenComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
