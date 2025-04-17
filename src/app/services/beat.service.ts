import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})


export class BeatService{
  private http = inject(HttpClient);


  // getTrendingBeats() {
  //   return this.http.get('/api/playlist/trending');
  // }

  getTrendingBeats() {
    return this.http.get('https://api-server.illpeoplemusic.com/api/v2/playlist/trending');
  }



  // getTrendingBeats() {
  //   // Use relative path to call the serverless function
  //   return this.http.get('/api/trending-beats');
  // }
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
    final_price: number; 
    currency: string;
    _id: string;
  }[];
  tag?: string[];
};
