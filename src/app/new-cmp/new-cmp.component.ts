import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './../myservice.service';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {

  newcomponent = "Entered in new component created";
  todaysDate;
  newcomponentproperty;

  constructor(private myservice: MyserviceService) { }

  ngOnInit() {
    console.log("Inside new component")

    this.todaysDate = this.myservice.showTodayDate();
    this.newcomponentproperty = this.myservice.serviceproperty
  }

}
