import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hobbies: string[] = ['skating', 'snowboarding', 'skiing']
  newHobby: string = ''
  hobbyDeleted: boolean = false

  addHobby(hobby: string) {
    this.hobbies.push(hobby)
    this.newHobby = ''
  }

  getColor() {
    this.hobbies.length > 3 ? 'orange' : 'blue'
  }

  removeHobby(selectedHobby: string) {
    this.hobbies = this.hobbies.filter((hobby) => {
      return hobby !== selectedHobby
    })
    this.hobbyDeleted = true
  }
}
