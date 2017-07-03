import {Component,OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
       selector: 'app-star',
       templateUrl: 'star.component.html',
       styleUrls : ['start.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() gradingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
               this.starWidth = this.rating * 86 / 5;
    }

    onClick() {
       this.gradingClicked.emit(`Grade ${this.rating} changed`);
    }
}