import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { Http } from '@angular/http';
 import { map } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
 // import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Angular6App';
 
  job = 'Intern';

  months = ["January","February","March",
  "April","May","June",
  "July","August","September",
  "october","November","December"];
  
  isavailable = false;

  todayDate = new Date();
  
  jsonval = {name:"sambit",age:"25",address:{a1:"Koraput",a2:"Banglore"}};
 
  myClickFunction(event){
    this.isavailable = true;
    alert("Button is Clicked");
    console.log(event);
  };

  changeMonths(event){
    alert("month Changed from the dropdown");
    console.log("The changed month is: "+event.target.value);
    console.log(event);
  };

  a1=5;
  a2=36;
  httpdata1;
  httpdata2;
  Httpclientdata1;
  Httpclientdata2;
  todaysDate;
  componentproperty;

  constructor(private myservice : MyserviceService,private http1 : Http,private http2 : HttpClient){}
  ngOnInit(){
    this.todaysDate = this.myservice.showTodayDate();
    console.log(this.myservice.serviceproperty);
    this.myservice.serviceproperty = "component created";
    this.componentproperty = this.myservice.serviceproperty;

    this.http1.get("http://jsonplaceholder.typicode.com/users").
     pipe(map((response)=>response.json())).
    subscribe((data)=>this.display(data));

    this.http1.get("http://jsonplaceholder.typicode.com/users?id="+this.a1).
    pipe(map((result)=>result.json())).
    subscribe((data)=>this.display1data(data));
  
    this.http2.get("https://jsonplaceholder.typicode.com/comments?postId=1").
  subscribe((data)=>this.show1(data));

  this.http2.get("https://jsonplaceholder.typicode.com/comments?id="+this.a1).
  subscribe((data)=>this.show2(data));

  }
  display(data){
    console.log("dasdas");
    console.log("data", data);
    this.httpdata1=data;

  }
  display1data(data){
    this.httpdata2=data;
  }
  show1(data){
    this.Httpclientdata1=data;
  }
  show2(data){
    this.Httpclientdata2=data;
  }
}
