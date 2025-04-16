import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beats-dropdown',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './beats-dropdown.component.html',
  styleUrls: ['./beats-dropdown.component.css'],
})
export class BeatsDropdownComponent {
  // isOpen = false;

  // toggleDropdown() {
  //   this.isOpen = !this.isOpen;
  // }
}
