import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { WhatsappService } from './whatsapp.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule,
    HttpClientModule
  ],
  providers: [WhatsappService],
  bootstrap: [AppComponent]
})
export class AppModule { }
