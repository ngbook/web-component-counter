import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';

import { CounterComponent } from './counter/counter.component';
import { WheelComponent } from './wheels/wheel/wheel.component';
import { WheelsComponent } from './wheels/wheels.component';
import { RangeModule } from 'ngbook-kits';

@NgModule({
    declarations: [
        WheelComponent,
        WheelsComponent,
        CounterComponent,
    ],
    imports: [
        BrowserModule,
        RangeModule
    ],
    providers: [],
    entryComponents: [CounterComponent]
})
export class AppModule {
    constructor(injector: Injector) {
        const strategyFactory = new ElementZoneStrategyFactory(CounterComponent, injector);
        const myEle = createCustomElement(CounterComponent, { injector, strategyFactory });
        customElements.define('ng-counter', myEle);
    }
    ngDoBootstrap() { }
}
