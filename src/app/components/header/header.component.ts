import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RouterLink } from '@angular/router';
import { BeatsDropdownComponent } from '../beats-dropdown/beats-dropdown.component';
import { MenuComponent } from '../menu/menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule,SearchBarComponent, BeatsDropdownComponent, MenuComponent,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showMenu = false;

toggleMenu() {
  this.showMenu = !this.showMenu;
}

closeMenu() {
  this.showMenu = false;
}
}
