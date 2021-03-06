import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

@Component({
    selector: 'ng-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class CounterComponent implements OnInit {
    @Input() // 单个数字的宽度
    set width(w: number) {
        if (w) {
            this._width = w;
            this.otherInit();
        }
    }
    get width() {
        return this._width;
    }
    @Input()
    height: number;
    @Input()
    fontSize: number;

    hours = '0';
    minutes = '0';
    seconds = '0';

    constructor() {
        if (!this.height) {
            this.otherInit();
        }
    }

    private time = moment('2018-01-01 00:00:00');
    private _width = 100;

    ngOnInit() {
        setInterval(() => {
            this.time.add(1, 's');
            this.seconds = this.num2str(this.time.seconds());
            this.minutes = this.num2str(this.time.minutes());
            this.hours = this.num2str(this.time.hours());
        }, 1000);
    }

    private otherInit() {
        this.height = Math.round(this._width / 100 * 144);
        this.fontSize = Math.round(this.height * 0.8);
    }

    private num2str(num: number | string): string {
        num = +num; // 用户输入的是字符串，这里要强制转一下
        if (num < 10) {
            return '0' + num;
        } else {
            return '' + num;
        }
    }
}
