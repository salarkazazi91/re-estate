import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

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

  mainBtn = 'buy';

  openSearchControl = '';


  tags = [
    'تهران',
    'تهران',
    'تهران',
  ]
  states = ['آپارتمان', 'ویلا و باغ', 'زمین و کلنگی', 'اداری', 'تجاری', 'مستغلات'];

  @ViewChild('melkElement') melkElement!: ElementRef;
  @ViewChild('melkBtn') melkBtn!: ElementRef;

  // FUNCTIONS


  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.melkElement.nativeElement && e.target !== this.melkBtn.nativeElement
        && !Array.from(this.melkElement.nativeElement.children).find(x => x == e.target)) {
         this.openSearchControl = '';
      }
    })

  }

  ngOnInit(): void {
  }


  removeTag(tag: string) {
    this.tags.splice(this.tags.indexOf(tag), 1)
  }

  searchContollClicked(control: string) {
    this.openSearchControl = this.openSearchControl == control ? '' : control;
  }

}
