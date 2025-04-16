
import { Component, OnInit , inject} from '@angular/core';
import { Beat, BeatService } from '../../services/beat.service';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from '../filters/filters.component';
import { BeatCardsComponent } from '../beat-cards/beat-cards.component';


@Component({
  selector: 'app-explore-beats',
  standalone: true,
  imports: [FiltersComponent, BeatCardsComponent,CommonModule],
  templateUrl: './explore-beats.component.html',
  styleUrl: './explore-beats.component.css'
})
export class ExploreBeatsComponent implements OnInit {
  private beatservice = inject(BeatService);
  beats : Beat[] = [];

   ngOnInit(): void {
     this.getBeats();
   }


  //  getBeats(){
  //   this.beatservice.getTrendingBeats().subscribe({
  //     next : (res) => {
  //       console.log(" resposne" ,res);
  //       // this.beats = res.beats;
  //       console.log(this.beats);
  //     }
  //    })
  //  }

  getBeats() {
    this.beatservice.getTrendingBeats().subscribe({
      next: (res: any) => {
        console.log("response", res);
        this.beats = res.playlists[0].beats;
        console.log("Extracted beats:", this.beats);
        console.log(this.beats);
      },
      error: (err) => {
        console.error('Failed to load beats:', err);
      }
    });
  }
}
