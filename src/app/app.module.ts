import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatInputModule} from '@angular/material';
import { FusenComponent } from './fusen/fusen.component';
import { FusenDirective } from './fusen/fusen.directive';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';

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
    MatInputModule
  ],
  entryComponents: [FusenComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
