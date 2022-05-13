import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { timer } from 'rxjs';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, SwiperOptions, Autoplay } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation,Autoplay]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit, AfterContentInit {
  // VARS
  leastMeter = '';
  mostMeter = '';

  leastPrice = '';
  mostPrice = '';

  mainBtn = 'buy';

  openSearchControl = '';
  openSearchOptions = false;
  private imagePath = '../../assets/images/';
  apartments = [
    {
      image: this.imagePath + 'house.jpg',
      title: 'آپارتمان 90 متری برای فروش در شهر زیبا ، تهران',
      type: 'آپارتمان',
      size: 90,
      rooms: 2,
      price: 3800000,
    },
    {
      image: this.imagePath + 'home-main.png',
      title: 'آپارتمان 90 متری برای فروش در شهر زیبا ، تهران',
      type: 'آپارتمان',
      size: 90,
      rooms: 2,
      price: 3800000,
    },
    {
      image: this.imagePath + 'house.jpg',
      title: 'آپارتمان 90 متری برای فروش در شهر زیبا ، تهران',
      type: 'آپارتمان',
      size: 90,
      rooms: 2,
      price: 3800000,
    },
    {
      image: this.imagePath + 'home-main.png',
      title: 'آپارتمان 90 متری برای فروش در شهر زیبا ، تهران',
      type: 'آپارتمان',
      size: 90,
      rooms: 2,
      price: 3800000,
    },
    {
      image: this.imagePath + 'house.jpg',
      title: 'آپارتمان 90 متری برای فروش در شهر زیبا ، تهران',
      type: 'آپارتمان',
      size: 90,
      rooms: 2,
      price: 3800000,
    },
    {
      image: this.imagePath + 'home-main.png',
      title: 'آپارتمان 90 متری برای فروش در شهر زیبا ، تهران',
      type: 'آپارتمان',
      size: 90,
      rooms: 2,
      price: 3800000,
    },
  ];

  tags = ['تهران', 'تهران', 'تهران'];
  states = [
    'آپارتمان',
    'ویلا و باغ',
    'زمین و کلنگی',
    'اداری',
    'تجاری',
    'مستغلات',
  ];
  selectedStates = {
    apartment: false,
    field: false,
    land: false,
    mostaghelat: false,
    organization: false,
    commercial: false,
  };
  @ViewChild('melkElement') melkElement!: ElementRef;
  @ViewChild('melkBtn') melkBtn!: ElementRef;

  @ViewChild('meterElement') meterElement!: ElementRef;
  @ViewChild('meterBtn') meterBtn!: ElementRef;

  @ViewChild('priceElement') priceElement!: ElementRef;
  @ViewChild('priceBtn') priceBtn!: ElementRef;

  agancies = [
    'عطا',

    'ویهان',

    'نگین',

    'ساحل',

    'پازل',

    'پارادایم',

    'بوکان',

    'ساد',
  ];
  selectedAgancy = '';
  config!: SwiperOptions;
  // FUNCTIONS
  doSomething() {
    const source = timer(10);
    const subscribe = source.subscribe((val) =>
      console.log(this.selectedStates)
    );
  }

  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (
        this.openSearchControl === 'melk' &&
        e.target !== this.melkElement.nativeElement &&
        e.target !== this.melkBtn.nativeElement &&
        !Array.from(this.melkElement.nativeElement.children).find(
          (x) => x == e.target
        )
      ) {
        this.openSearchControl = '';
      }
      let meterChildrentClicked =
        Array.from(
          this.meterElement.nativeElement.children[0].children[0].children
        ).find((x) => x == e.target) ||
        Array.from(
          this.meterElement.nativeElement.children[0].children[1].children
        ).find((x) => x == e.target);

      let priceChildrentClicked =
        Array.from(
          this.priceElement.nativeElement.children[0].children[0].children
        ).find((x) => x == e.target) ||
        Array.from(
          this.priceElement.nativeElement.children[0].children[1].children
        ).find((x) => x == e.target);

      if (
        this.openSearchControl === 'meter' &&
        e.target !== this.meterElement.nativeElement &&
        e.target !== this.meterBtn.nativeElement &&
        !meterChildrentClicked
      ) {
        this.openSearchControl = '';
      }

      if (
        this.openSearchControl === 'price' &&
        e.target !== this.priceElement.nativeElement &&
        e.target !== this.priceBtn.nativeElement &&
        !priceChildrentClicked
      ) {
        this.openSearchControl = '';
      }
    });
  }
  ngAfterContentInit(): void {
    this.config = {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
      navigation: true,
      pagination: { clickable: true },
      scrollbar: { draggable: true },
      loop: true,
      loopFillGroupWithBlank: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      breakpoints: {
        512: {
          spaceBetween: 25,
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 7,
        },
      },
    };
  } 
  ngOnInit(): void {}

  removeTag(tag: string) {
    this.tags.splice(this.tags.indexOf(tag), 1);
  }

  searchContollClicked(control: string) {
    this.openSearchControl = this.openSearchControl == control ? '' : control;
  }

  carouselTransitionEnd([swiper]: any) {
    let index = swiper.realIndex;
    index = index >= this.agancies.length ? 0 : index;
    this.selectedAgancy = this.agancies[index];

    this.cdr.detectChanges();
    console.log(swiper);
    console.log(swiper.realIndex);
  }
}
