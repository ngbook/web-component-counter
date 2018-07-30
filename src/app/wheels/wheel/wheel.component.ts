import {
    Component, OnInit,
    Input, ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'ng-wheel',
    templateUrl: './wheel.component.html',
    styleUrls: ['./wheel.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class WheelComponent implements OnInit {
    @Input()
    delay = 500;
    @Input()
    set num(pos: number) {
        if (pos === this._num) {
            return;
        }
        if (pos >= 0) {
            if (pos > 10) {
                pos %= 10;
            }
            setTimeout(() => {
                this._num = +pos;
                this.top = this.height * this._num;
            }, this.delay);
        }
    }
    @Input()
    height = 50;
    @Input()
    width = 30;
    @Input()
    color = '#555';
    @Input()
    bg = '#fff';
    @Input()
    fontSize = 0;

    top = 0;
    private _num = 0;

    constructor() { }

    ngOnInit() {
    }

}
