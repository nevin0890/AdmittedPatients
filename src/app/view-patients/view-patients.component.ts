import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.component.html',
  styleUrls: ['./view-patients.component.scss']
})
export class ViewPatientsComponent implements OnInit {

  public loop = [1,1,1,1,1,1,1,1,1,1,1,1]


  constructor() { }

  ngOnInit(): void {
  }

}
