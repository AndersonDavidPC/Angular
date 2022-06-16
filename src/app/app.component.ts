import { Component } from '@angular/core';

import { Product } from "./product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  // String interpolation
  name = "Anderson";
  age = 21;
  img = "https://source.unsplash.com/random"

  // Property binding
  btnDisabled = true;

  // Event binding
  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }
  increaseAge(){
    this.age+=1;
  }
  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);

  }

  names: string[] = ['Anderson', 'Diego', 'Freddy'];
  newName = '';
  addName(){
    this.names.push(this.newName);
    this.newName='';
  }
  deleteName(index: number){
    this.names.splice(index, 1);
  }

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  widthImg=10;
}
