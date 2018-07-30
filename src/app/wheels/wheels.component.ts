import {
    Component, OnInit,
    Input,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'ng-wheels',
    templateUrl: './wheels.component.html',
    styleUrls: ['./wheels.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class WheelsComponent implements OnInit {

    @Input()
    set data(dd: string) {
        // console.log('setter');
        if (!dd || dd === this._data) {
            return;
        }
        this._data = dd;
        const count = dd.length;
        const nums = [];
        for (let i = 0; i < count; i++) {
            const d = dd[i];
            nums.push(d);
        }
        this.nums = nums;
        console.log(this.nums);
    }

    @Input()
    delay;
    @Input()
    set height(h: number) {
        this._height = h;
        this.fontSize = Math.round(h * 0.8);
    }
    get height() {
        return this._height;
    }
    @Input()
    set width(w: number) {
        this._width = w;
        this.height = Math.round(w / 100 * 144);
    }
    get width() {
        return this._width;
    }
    @Input()
    set fontSize(f: number) {
        if (f) {
            this._fontSize = f;
        }
    }
    get fontSize() {
        return this._fontSize;
    }
    @Input()
    color: string;
    @Input()
    bg = '#fff';
    @Input()
    itemBg: string;
    @Input()
    margin: string;

    nums: string[] = [];
    private _data: string;
    private _width = 30;
    private _height = 50;
    private _fontSize = 0;

    constructor() { }

    ngOnInit() {
        // console.log(this.nums);
    }

    trackByFn(index, item) {
        return index; // or item.id
    }
}
