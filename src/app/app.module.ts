import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { CommonModule } from "@angular/common";
import { ChatService } from "./services/chat.service";

@NgModule({
  declarations: [
    AppComponent,
    ChatDialogComponent
  ],
  imports: [
    BrowserModule,
     CommonModule,
    FormsModule
  ],
  exports: [ ChatDialogComponent ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
