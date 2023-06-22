import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from 'src/app/services/get-movies.service';
import { Movie } from 'src/app/module/movie.interface';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';
import { Favourite } from 'src/app/module/favorite.interface';
import { Utente } from 'src/app/module/utente.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  moviesList!: Movie[];
  poster = environment.posterUrl;
  utente!: Partial<Utente>;
  favoriteMovies!: Favourite[];
  singleMovie!:Favourite;

  constructor(
    private movies: GetMoviesService,
    private authSrv: AuthService
  ) {}

  ngOnInit(): void {

    this.authSrv.user$.subscribe((_utente) => {
      if (_utente) {
        this.utente = _utente.user;

        this.favoriti(this.utente.id!)
      }
    });

    this.movies.getMovies().subscribe((allMovies: Movie[]) => {
      this.moviesList = allMovies;

    });
  }

  favoriti(id:any):void {
    this.movies.getFavourites(id).subscribe((data:Favourite[]) => {
      this.favoriteMovies = data
    })
  }

  checkMatch(id:number): boolean {

      return this.favoriteMovies.some((element) => element.movieId===id)

    }

  addFavorite(movieId: number):void {
    const favorite = {
      movieId: movieId,
      userId: this.utente.id,
    };

    this.movies.addFavourite(favorite).subscribe((() =>{
      this.favoriti(this.utente.id)
    }));
  }

  removeFavorite(id:number):void {
    const realId = this.findId(id)

    if(realId) {
    this.movies.removeFavorite(realId!).subscribe(() =>{
      this.favoriti(this.utente.id)
    })
  }
  }

  findId(id:number): number | null {

    const myMovie = this.favoriteMovies.find(element =>
      element.movieId===id);
      return myMovie?.id!

    }
  }


