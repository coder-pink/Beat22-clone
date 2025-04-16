import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RouterLink } from '@angular/router';
import { BeatsDropdownComponent } from '../beats-dropdown/beats-dropdown.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink,SearchBarComponent, BeatsDropdownComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
