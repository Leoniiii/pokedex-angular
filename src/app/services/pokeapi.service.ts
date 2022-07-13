import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  constructor(private http: HttpClient) {}

  getAllPodemons() {
    return this.http.get('https://workshop-pokeapi.vercel.app/pokemons');
  }
}
