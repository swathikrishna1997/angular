import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {employees} from './employee'


@Injectable({
  providedIn: 'root'
})
export class MrserviceService {
private url:string="/assets/employee.json"
  constructor(private http:HttpClient) { }
  showTodayDate() {
    let ndate = new Date();
    return ndate;
 }
 getEmployee():Observable<employees[]>{
   return this.http.get<employees[]>(this.url)
 }
}
