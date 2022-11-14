import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const uri = "http://localhost:3000/api"

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  constructor(private httpClient: HttpClient) {
  }

  get() {
    return this.httpClient.get(uri, {responseType: 'text'})
  }

  post() {
    return this.httpClient.post(uri, {},{responseType: 'text'})
  }
}
