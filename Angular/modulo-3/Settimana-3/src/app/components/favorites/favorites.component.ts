import { Component, OnInit } from '@angular/core';
import { Favourite } from 'src/app/module/favorite.interface';
import { GetMoviesService } from 'src/app/services/get-movies.service';
import { AuthService } from 'src/app/services/auth.service';
import { Utente } from 'src/app/module/utente.interface';
import { Movie } from 'src/app/module/movie.interface';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {



  utente!: Partial<Utente>;
  favoriteMovies!: Favourite[];
  movieList!: Movie[]
  poster = environment.posterUrl



  constructor(private movies: GetMoviesService, private authSrv: AuthService) { }

  ngOnInit(): void {


    this.authSrv.user$.subscribe((_utente) => {
      if (_utente) {
        this.utente = _utente.user;

        this.favoriti(this.utente.id!)
        this.movies.getMovies().subscribe((data:Movie[]) => {
          this.movieList = data
        })

      }
    });


}

favoriti(id:number):void {
  this.movies.getFavourites(id).subscribe((data:Favourite[]) => {
    this.favoriteMovies = data
  })
}


}
