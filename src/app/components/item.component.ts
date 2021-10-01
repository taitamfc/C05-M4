import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: '[app-item]',
    templateUrl: './../templates/item.component.html',
})
export class ItemComponent implements OnInit {
    @Input('input_item') item: any;
    @Output('outputItem') outputItem = new EventEmitter();
    constructor() { }

    ngOnInit(): void {
        console.log(this.item);
    }

    handleClick(id: number) {
        console.log('handleClick', id);

        this.outputItem.emit();
    }

}
