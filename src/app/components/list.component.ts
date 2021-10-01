import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './../templates/list.component.html',
})
export class ListComponent implements OnInit {
    items: any[] = [
        {
            'id': 1,
            'task': 'Task A',
            'level': 0,
        },
        {
            'id': 2,
            'task': 'Task B',
            'level': 1,
        },
        {
            'id': 3,
            'task': 'Task C',
            'level': 2,
        }
    ];
    constructor() { }

    ngOnInit(): void {
    }

    listComponentHandleClick() {
        let new_item = {
            'id': 4,
            'task': 'Task D',
            'level': 'Normal',
        }
        this.items.push(new_item);
    }

}
