import { Component, OnInit, Input } from '@angular/core';
import { DeliveryOptions } from 'src/app/types/card';

@Component({
  selector: 'app-delivery-options',
  templateUrl: './delivery-options.component.html',
  styleUrls: ['./delivery-options.component.scss']
})
export class DeliveryOptionsComponent implements OnInit {
  @Input() options: DeliveryOptions | undefined
  constructor() { }

  ngOnInit(): void {}
  get postamate(): string {
    return this.options?.postamate ? "доступна" : "недоступна"
  }

}
