import { Component,  Input} from '@angular/core';
import { Beat, BeatService } from '../../services/beat.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beat-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beat-cards.component.html',
  styleUrls: ['./beat-cards.component.css'],
})


export class BeatCardsComponent{
  @Input() beat!: Beat;

}



