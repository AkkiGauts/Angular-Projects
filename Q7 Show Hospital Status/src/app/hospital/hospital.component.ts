import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   data = [{
    "id":101,
    "location":"Pune",
    "name":"Sevadham",
    "status":"Available"
  },
  {
    "id":102,
    "location":"Dadar",
    "name":"Nair Hospital",
    "status":"Available"
  },
  {
    "id":103,
    "location":"Mumbai",
    "name":"Bombay Hospital & Medical Research Centre",
    "status":"Unavailable"
  },
  {
    "id":104,
    "location":"Pune",
    "name":"Inlakes Budhrani Hospital",
    "status":"Available"
  },
  {
    "id":105,
    "location":"Delhi",
    "name":"JB Hospital",
    "status":"Available"
  },
  {
    "id":109,
    "location":"Pune",
    "name":"General Hospital",
    "status":"Unavailable"
  }]



}
