import {Component} from '@angular/core';
import {HttpRequestsService} from "../../service/http-requests.service";


@Component({
  selector: 'app-simple-test',
  templateUrl: './simple-test.component.html',
  styleUrls: ['./simple-test.component.scss']
})
export class SimpleTestComponent {
  getBuffer: string = ""
  postBuffer: string = "";

  constructor(private httpRequest: HttpRequestsService) {
  }

  callApiGet() {
    this.httpRequest.get().subscribe(data => this.getBuffer = data)
  }

  resetGet() {
    this.getBuffer = ""
  }

  callPostApi() {
    this.httpRequest.post().subscribe(data => this.postBuffer = data)
  }

  resetPost() {
    this.postBuffer = ""
  }
}
