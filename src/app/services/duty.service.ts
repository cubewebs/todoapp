import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Duty } from '../models/duty';

@Injectable({
  providedIn: 'root'
})
export class DutyService {
  url = 'http://localhost:4000/api/duties/';

  constructor(private http: HttpClient) { }

  getDuties(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteDuty(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  saveDuty(duty: Duty): Observable<any> {
    return this.http.post(this.url, duty);
  }

  obtainDuty(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editDuty(id: string, duty: Duty): Observable<any> {
    return this.http.put(this.url + id, duty);
  }

}
