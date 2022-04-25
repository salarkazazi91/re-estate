import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // VARS
  tags = [
    'تهران',
    'تهران',
    'تهران', 
  ]


  // FUNCTIONS


  constructor() { }

  ngOnInit(): void {
  }


  removeTag(tag: string) {
     this.tags.splice(this.tags.indexOf(tag), 1)
  }

}
