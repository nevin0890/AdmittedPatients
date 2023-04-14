import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  public loop=[1,1,1,1,1];

  constructor() { }

  ngOnInit(): void {
  }

}
