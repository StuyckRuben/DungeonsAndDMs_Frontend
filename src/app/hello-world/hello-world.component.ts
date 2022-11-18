import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  name: any = "";
  constructor(private HttpClient: HttpClient) { }

  ngOnInit(): void {
    this.HttpClient.get<any>("http://localhost:8080/helloworld").subscribe(data => {
      this.name = data.reply;
      console.log(data);
    });
  }

}
