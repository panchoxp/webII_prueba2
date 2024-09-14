import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MecanicoService {

  constructor(private http:HttpClient) { }
  private API_REVISION= 'http://localhost:3000/revision'

  
  getRevision(): Observable<any> {
    return this.http.get(this.API_REVISION)
  }
  postLRevision(item: any): Observable<any> {
    return this.http.post(this.API_REVISION, item)
  }
}
