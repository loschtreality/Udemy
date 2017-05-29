import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Michael';
  elements: number[] = []
  message = ''

  onChangeName() {
    this.name = 'Loren'
  }

  onAddElement() {
    this.elements.push(this.elements.length + 1)
  }

  getColor(element: number) {
    return element % 2 === 0 ? 'green' : 'red'
  }

  onUserWasClicked(username: string) {
    alert(username)
  }
}
