import { Component,OnInit } from '@angular/core';
import { AppserviceService } from './appservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'testproject';
  constructor(private service: AppserviceService) { }

  ngOnInit(){
    //service call here
  }
  
}
