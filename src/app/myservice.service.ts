import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  serviceproperty = 'Service Created';

  constructor() { }

  showTodayDate() {
    var nDate = new Date();
    return nDate;
  }
}
