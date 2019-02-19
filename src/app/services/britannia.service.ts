import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BritanniaService {

  constructor(
    private http:HttpClient
  ) { }


  getAnswer(question:string):Observable<any>{
   const url = 'downloadatabaseapi/downloadatabase/get-answer';
   const body = {question:question};
   return this.http.get(url,{params:body});
  }





  
}
