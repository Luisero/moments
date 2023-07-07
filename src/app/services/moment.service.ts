import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Moment } from '../models/Moment';
import { Response } from '../models/Response';
@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = this.baseApiUrl+"api/moments";
  
  
  constructor(private http: HttpClient) { }


  getAllMoments(): Observable<Response<Moment[]>>{
    return this.http.get<Response<Moment[]>>(this.apiUrl);
  }

  createMoment(formData: FormData): Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  getMomentById(id: number): Observable<Response<Moment>>{
    return this.http.get<Response<Moment>>(`${this.apiUrl}/${id}`);
  }

  removeMomentById(id: number): Observable<Response<Moment>>{
    return this.http.delete<Response<Moment>>(`${this.apiUrl}/${id}`)
  }


}
