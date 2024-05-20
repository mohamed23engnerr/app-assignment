import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  isUser = true
  ching() {
    this.isUser = false
  }
  isUser1 = true
  ching1() {
    this.isUser1 = false
  }
  isUser2 = true
  ching2() {
    this.isUser2 = false
  }
  isUser3 = true
  ching3() {
    this.isUser3 = false
  }
}
