import { Component } from '@angular/core';
import { WhatsappService } from './whatsapp.service';
import {BritanniaService} from './services/britannia.service';
import { from } from 'rxjs';
// import { LoaderService } from './../../loader/loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'whatsApp';
  dataList: string;
  now:number;
  dataListMessage = [];
  constructor(private WhatsappService: WhatsappService,
   private service:BritanniaService ) {
    setInterval(() => {
      this.now = Date.now();
    }, 1);
  }

  Answer(question) {
    console.log(question);
    console.log("yess i am basted");
    this.service.getAnswer(question).subscribe(
      response => {
        this.dataList = response;
        let tempListQ = {
          question: response.question,
          date: response.date,
          type: 'question'
        }
        let tempListA = {
          answer: response.answer,
          date: response.date,
          type: 'answer'
        }
        this.dataListMessage.push(tempListQ);
        this.dataListMessage.push(tempListA);
        console.log(this.dataList);
      },
      error => {
        console.log(error);
      }
    );
    // window.scrollTo(200000,document.body.scrollHeight);

    
  }
}
