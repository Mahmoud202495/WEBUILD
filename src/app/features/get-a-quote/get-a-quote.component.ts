import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-a-quote',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './get-a-quote.component.html',
  styleUrl: './get-a-quote.component.scss',
})
export class GetAQuoteComponent {
  // prices = [
  //   {
  //     name: 'Basic Plan',
  //     description: 'For individuals and small teams',
  //     price: '$10/month',
  //   },
  //   {
  //     name: 'Standard Plan',
  //     description: 'For growing businesses',
  //     price: '$25/month',
  //   },
  //   {
  //     name: 'Premium Plan',
  //     description: 'For enterprises',
  //     price: '$50/month',
  //   },
  //   {
  //     name: 'Custom Plan',
  //     description: 'Tailored solutions for your needs',
  //     price: 'Contact Us',
  //   },
  // ];
  services = [
    {
      title: 'Architectural Design',
      description: 'For individuals and small teams',
      price: 500,
      discountPrice: 400,
      image: '/img/portfolio-1.jpg',
    },
    {
      title: 'Interior Design',
      description: 'For growing businesses',

      price: 400,
      discountPrice: null,
      image: '/img/portfolio-2.jpg',
    },
    {
      title: 'Structural Design',
      description: 'For enterprises',
      price: 700,
      discountPrice: 650,
      image: '/img/portfolio-3.jpg',
    },
    {
      title: 'Landscape Design',
      description: 'For enterprises',

      price: '350',
      image: '/img/portfolio-4.jpg',
    },
    {
      title: 'Renovation Planning',
      description: 'Tailored solutions for your needs',

      price: '600',
      image: '/img/portfolio-5.jpg',
    },
    {
      title: 'Project Management',
      description: 'Tailored solutions for your needs',
      price: '800',
      image: '/img/portfolio-6.jpg',
    },
  ];
}
