import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-content',
  standalone: true,
  imports: [NgFor],
  templateUrl: './menu-content.component.html',
  styleUrl: './menu-content.component.scss',
})
export class MenuContentComponent {
  menuItems = [
    {
      title: 'Iced V60',
      description:
        'A carefully brewed cup of coffee using single-origin beans, prepared with the V60 method and served with five ice cubes.',
      image: '/img/gallery/ (1).jpg',
      calories: 50,
      price: 29,
    },
    {
      title: 'Cold Brew',
      description:
        'Experience the bold and smooth flavor of our cold brew coffee, fermented for 20 hours for a rich taste.',
      image: '/img/gallery/ (2).jpg',
      calories: 100,
      price: 34,
    },
    {
      title: 'Iced V60',
      description:
        'A carefully brewed cup of coffee using single-origin beans, prepared with the V60 method and served with five ice cubes.',
      image: '/img/gallery/ (3).jpg',
      calories: 30,
      price: 29,
    },
    {
      title: 'Cold Brew',
      description:
        'Experience the bold and smooth flavor of our cold brew coffee, fermented for 20 hours for a rich taste.',
      image: '/img/gallery/ (4).jpg',
      calories: 40,
      price: 34,
    },
    {
      title: 'Iced V60',
      description:
        'A carefully brewed cup of coffee using single-origin beans, prepared with the V60 method and served with five ice cubes.',
      image: '/img/gallery/ (5).jpg',
      calories: 50,
      price: 20,
    },
    {
      title: 'Cold Brew',
      description:
        'Experience the bold and smooth flavor of our cold brew coffee, fermented for 20 hours for a rich taste.',
      image: '/img/gallery/ (6).jpg',
      calories: 32,
      price: 34,
    },
    {
      title: 'Iced V60',
      description:
        'A carefully brewed cup of coffee using single-origin beans, prepared with the V60 method and served with five ice cubes.',
      image: '/img/gallery/ (7).jpg',
      calories: 35,
      price: 10,
    },
    {
      title: 'Cold Brew',
      description:
        'Experience the bold and smooth flavor of our cold brew coffee, fermented for 20 hours for a rich taste.',
      image: '/img/gallery/ (8).jpg',
      calories: 3,
      price: 34,
    },
    {
      title: 'Iced V60',
      description:
        'A carefully brewed cup of coffee using single-origin beans, prepared with the V60 method and served with five ice cubes.',
      image: '/img/gallery/ (9).jpg',
      calories: 3,
      price: 29,
    },
    {
      title: 'Cold Brew',
      description:
        'Experience the bold and smooth flavor of our cold brew coffee, fermented for 20 hours for a rich taste.',
      image: '/img/gallery/ (10).jpg',
      calories: 3,
      price: 34,
    },
  ];

  addToCart(item: any) {
    console.log(`${item.title} has been added to the cart.`);
  }
}
