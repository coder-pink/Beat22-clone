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
// export class BeatCardsComponent implements OnInit {
  // beats: any[] = [];

  // constructor(private beatService: BeatService) {}

  // ngOnInit(): void {
  //   this.beatService.getTrendingBeats().subscribe(response => {
  //     this.beats = response.data.beats;
  //   });
  // }


  // private beats = inject(BeatService);
  // beat : Beat[] = [];

  //  ngOnInit(): void {
  //    this.getBeats();
  //  }


  //  getBeats(){
  //   this.beats.getTrendingBeats().subscribe({
  //     next : (res) => {
  //       console.log(res);
  //       this.beat = res.data;
  //       console.log(this.beat);
  //     }
  //    })
  //  }
// }


export class BeatCardsComponent{
  @Input() beat!: Beat;

}



