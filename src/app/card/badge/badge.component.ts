import { Component, Input, OnInit } from '@angular/core';
import { ProductBadge } from 'src/app/types/card';

@Component({
  selector: 'app-badge',
  template: `
    <div class = "badge" [style.background-color]="badge.color">
  {{badge.text}}
    </div>
  `,
  styleUrls: [ './badge.component.scss'
  ]
})
export class BadgeComponent implements OnInit {
  @Input() badge
  constructor() { }

  ngOnInit(): void {
  }

}
