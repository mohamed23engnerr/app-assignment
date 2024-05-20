import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallare',
  templateUrl: './gallare.component.html',
  styleUrls: ['./gallare.component.css']
})
export class GallareComponent {

  isSale = false
  isSale1 = false
  isSale2 = false
  
  user() {
    this.isSale = !this.isSale
  }
  user1() {
    this.isSale1 = !this.isSale1
  }
  user2() {
    this.isSale2 = !this.isSale2
  }
}
