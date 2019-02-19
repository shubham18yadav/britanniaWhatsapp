import { Injectable } from '@angular/core';
import { ApiSettings } from './settings/app.api-settings';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  

  constructor(private http: HttpClient) { }

  getAnswer(question: string): Observable<any> {
    const url = ApiSettings.API.downloadatabase.create + 'get-answer';
    return this.http.get(url, { params: { question: question } });
  }
}
