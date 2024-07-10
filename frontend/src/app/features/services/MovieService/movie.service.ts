import { Injectable, OnInit } from '@angular/core';
import { TrendingList } from 'app/shared/interfaces/lists';

@Injectable({
  providedIn: 'root'
})
export class MovieService implements OnInit{
  baseImageUrl : string = "https://image.tmdb.org/t/p/w500/";
  trendingList : TrendingList | any = {};

  constructor() { }

  ngOnInit(): void {
      this.getTrendingList();
  }

  getTrendingList() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2Y5OWYwMTQ4OGNiMGNhYjBhMjY2MmIwNzA5NDZiZSIsIm5iZiI6MTcyMDE3NjUwNC40OTcyNzcsInN1YiI6IjY2ODdjZTVhMjAwMzU5MjhkNjZmNWFhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pMXUJE6P5xhiUbzou9k36Uqks-KolMsTuXy-MwwOwhU'
      }
    };
    
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
      .then(response => {
        if(!response) {
          throw new Error("The GET request failed");
        }

        return response.json();
      })
      .then(response => {
        this.trendingList = response
      })
      .catch(err => console.error(err));

    console.log(this.trendingList);
  }
}
