import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { Tab1Page } from 'src/app/tab1/tab1.page';
import { EvenementComponent } from '../evenement/evenement.component';
import { SwiperModule } from "swiper/angular";
import { FormsModule } from '@angular/forms';
import { CarrouselComponent } from '../carrousel/carrousel.component';


@NgModule({
  declarations: [HeaderComponent, 
  EvenementComponent, 
  CarrouselComponent],
  imports: [
    CommonModule, 
    FormsModule,
    SwiperModule, 
    
  ], 
  exports : [HeaderComponent, 
    EvenementComponent, 
    CarrouselComponent]
})
export class SharedModule { }
