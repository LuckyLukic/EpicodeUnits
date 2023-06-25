import { Component, OnInit } from "@angular/core";
import { Favourite } from "src/app/module/favorite.interface";
import { GetMoviesService } from "src/app/services/get-movies.service";
import { AuthService } from "src/app/services/auth.service";
import { Utente } from "src/app/module/utente.interface";
import { Movie } from "src/app/module/movie.interface";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.scss"],
})
export class FavoritesComponent implements OnInit {
  utente!: Partial<Utente>;
  favoriteMovies!: Favourite[];
  movieList!: Movie[];
  poster = environment.posterUrl;
  preferedMovieList: Movie[] = [];

  constructor(private movies: GetMoviesService, private authSrv: AuthService) {}

  ngOnInit(): void {
    this.authSrv.user$.subscribe((_utente) => {
      if (_utente) {
        this.utente = _utente.user;

        this.favoriti(this.utente.id!);
      }
    });
  }

  favoriti(id: number): void {
    this.movies.getFavourites(id).subscribe((data: Favourite[]) => {
      this.favoriteMovies = data;
      for (let movie of this.favoriteMovies) {
        this.movies.getMovieDetail(movie.movieId).subscribe((data: Movie) => {
          this.preferedMovieList.push(data);
        });
      }
    });
  }

  removeFavorite(id:number):void {
    const realId = this.findId(id)

    if(realId) {
    this.movies.removeFavorite(realId!).subscribe()
    location.reload()

  }
  }

  findId(id:number): number | null {

    const myMovie = this.favoriteMovies.find(element =>
      element.movieId===id);
      return myMovie?.id!

    }
 }
