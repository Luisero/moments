import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import { Comment} from "../models/Comment";
import {Response} from "../models/Response";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  apiUrl: string = environment.baseApiUrl + 'api/moments'
  constructor(
    private http: HttpClient
  ) { }

  createComment(comment: Comment): Observable<Response<Comment>>{
    const url = `${this.apiUrl}/${comment.momentId}/comments`
    return this.http.post<Response<Comment>>(url, comment);
  }
}
