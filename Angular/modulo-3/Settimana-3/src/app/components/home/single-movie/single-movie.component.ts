import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from 'src/app/services/get-movies.service';
import { Movie } from 'src/app/module/movie.interface';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent implements OnInit {

  movie!: Movie
  myId!: number
  poster = environment.posterUrl

  constructor(private movieDetail: GetMoviesService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('id')) {
      this.myId = parseInt(this.route.snapshot.paramMap.get('id')!)
      this.movieDetail.getMovieDetail(this.myId).subscribe((data:Movie)=> {
        this.movie = data
        console.log(this.movie)
      })
    }

    }

  }


