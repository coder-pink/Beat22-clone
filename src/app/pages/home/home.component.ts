import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ExploreBeatsComponent } from '../../components/explore-beats/explore-beats.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, ExploreBeatsComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
