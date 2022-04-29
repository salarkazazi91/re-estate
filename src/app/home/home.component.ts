import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // VARS 
  leastMeter = '';
  mostMeter = '';
  mainBtn = 'buy';

  openSearchControl = '';


  tags = [
    'تهران',
    'تهران',
    'تهران',
  ]
  states = ['آپارتمان', 'ویلا و باغ', 'زمین و کلنگی', 'اداری', 'تجاری', 'مستغلات'];
  selectedStates = {
    apartment: false,
    field: false,
    land: false,
    mostaghelat: false,
    organization: false,
    commercial: false,
  }
  @ViewChild('melkElement') melkElement!: ElementRef;
  @ViewChild('melkBtn') melkBtn!: ElementRef;

  @ViewChild('meterElement') meterElement!: ElementRef;
  @ViewChild('meterBtn') meterBtn!: ElementRef;

  @ViewChild('priceElement') priceElement!: ElementRef;
  @ViewChild('priceBtn') priceBtn!: ElementRef;

  // FUNCTIONS
  doSomething() {

    const source = timer(10);
    const subscribe = source.subscribe(val =>
      console.log(this.selectedStates));

  }

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.openSearchControl === 'melk' && e.target !== this.melkElement.nativeElement && e.target !== this.melkBtn.nativeElement
        && !Array.from(this.melkElement.nativeElement.children).find(x => x == e.target)) {
        this.openSearchControl = '';
      }
      let meterChildrentClicked =
        Array.from(this.meterElement.nativeElement.children[0].children[0].children).find(x => x == e.target) || Array.from(this.meterElement.nativeElement.children[0].children[1].children).find(x => x == e.target);
    
     

        if (this.openSearchControl === 'meter' && e.target !== this.meterElement.nativeElement && e.target !== this.meterBtn.nativeElement
        && !meterChildrentClicked) {
        this.openSearchControl = '';
      }

      if (this.openSearchControl === 'price' && e.target !== this.priceElement.nativeElement && e.target !== this.priceBtn.nativeElement
        && !Array.from(this.meterElement.nativeElement.children[0].children[1].children).find(x => x == e.target)) {
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
