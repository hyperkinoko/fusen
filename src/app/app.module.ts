import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FusenComponent } from './fusen/fusen.component';
import { FusenDirective } from './fusen/fusen.directive';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import {MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    FusenComponent,
    FusenDirective,
    WhiteboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  entryComponents: [FusenComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
