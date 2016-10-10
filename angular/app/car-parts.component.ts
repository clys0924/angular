import { Component } from '@angular/core';
import { CarPart } from './car-part'
@Component({
  selector: 'car-parts',
  templateUrl: 'app/car-parts.component.html',
  styleUrls:['app/car-parts.component.css']
})
export class CarPartsComponent{
    carParts: CarPart[] = [{
    "id" : 1,
    "name" : "super Tires",
    "description" : "These tires are the very best",
    "inStock" : 5,
    "price":1.1
  },
  { 
    "id" : 2,
    "name" : "Reinforced Shocks",
    "description" : "Shocks made from kryptonite",
    "inStock" : 4,
    "price":2.1
  },
  { 
    "id" : 3,
    "name" : "Padded Seats",
    "description" : "Super soft seats for a smooth ride",
    "inStock" : 0,
    "price":3.1
  }
  ];
  totalCarParts(){
    let sum = 0;
    for (let carPart of this.carParts){
      sum += carPart.inStock;
    }
    return sum;
  }
}