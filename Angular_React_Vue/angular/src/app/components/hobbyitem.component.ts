import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hobbyli',
  template: (`
    <li (click)="onHobbyClicked()">{{ hobby }}</li>
    `)
})

export class HobbyListItem {
  @Input() hobby: string
  @Output() hobbyClicked = new EventEmitter<string>()

  onHobbyClicked() {
    this.hobbyClicked.emit(this.hobby)
  }
}
