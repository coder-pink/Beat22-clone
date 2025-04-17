import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  @Output() closeMenu = new EventEmitter<void>();

  close() {
    this.closeMenu.emit();
  }
}
