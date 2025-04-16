import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})


export class BeatService{
  private http = inject(HttpClient);

  getTrendingBeats() {
    return this.http.get('https://api-server.illpeoplemusic.com/api/v2/playlist/trending');
  }
}

export type Beat = {
  _id: string;
  title: string;
  owner: string;
  cover_picture: string;
  preview: string;
  tempo: number;
  prices: {
    license_type: string;
    amount: number;
    final_price: number; // ✅ Added this line
    currency: string;
    _id: string;
  }[];
  tag?: string[];
};
