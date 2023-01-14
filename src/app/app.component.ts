import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { product } from './data/product.data';
import { Product } from './types/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
title = 'Angular'
product: Product = product 
}
