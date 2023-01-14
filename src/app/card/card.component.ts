import { Component, Directive, Input, OnInit } from '@angular/core';
import { product } from '../data/product.data';
import { Product } from '../types/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() product: Product = product;
  constructor() { }

  ngOnInit(): void {
  } 

}
