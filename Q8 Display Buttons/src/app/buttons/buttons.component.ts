import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() { }
  message:any;
  getData(data:any) {
    this.message = data+" button has been clicked";
}
  ngOnInit(): void {
  }

}
