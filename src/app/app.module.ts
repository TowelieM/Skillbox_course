import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from './button/button.module';
import { CardComponent } from './card/card.component';
import { BadgeModule } from "./card/badge/badge.module";
import { IconTooltipModule } from './card/icon-tooltip/icon-tooltip.module';
import { RatingModule } from "./card/rating/rating.module";
import { PriceModule } from './card/price/price.module';
import { DeliveryOptionsModule } from "./card/delivery-options/delivery-options.module";
import { IconModule } from "./card/icon/icon.module";


@NgModule({
    declarations: [
        AppComponent,
        CardComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonModule,
        BadgeModule,
        IconTooltipModule,
        RatingModule,
        PriceModule,
        DeliveryOptionsModule,
        IconModule
    ]
})
export class AppModule { }
