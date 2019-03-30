import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-datepicker-popup',
  templateUrl: './datepicker-popup.component.html',
  styleUrls: ['./datepicker-popup.component.css']
})
export class DatepickerPopupComponent {
  model;

  @Output() minhaData = new EventEmitter<Object>();
  selectDate(){
 /*    console.log(this.model); */

    this.minhaData.emit(this.model);
  }

}
