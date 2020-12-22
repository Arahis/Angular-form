// import { Input } from 'antd';
// import { Input } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  submittedUsers: [];

  constructor() { }

  ngOnInit(): void {
  }

}
