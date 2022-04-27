import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // VARS
  hideResidencePanel = true;
  hidePricePanel = true;
  hideMeterPanel = true;

  mainBtn='buy';

  tags = [
    'تهران',
    'تهران',
    'تهران',
  ]
  states = ['آپارتمان', 'ویلا و باغ', 'زمین و کلنگی', 'اداری', 'تجاری', 'مستغلات'];

  // FUNCTIONS


  constructor() { }

  ngOnInit(): void {
  }


  removeTag(tag: string) {
    this.tags.splice(this.tags.indexOf(tag), 1)
  }

}
