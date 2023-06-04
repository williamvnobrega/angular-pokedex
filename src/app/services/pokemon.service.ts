import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment'
import {pokeData} from '../models/pokeData'
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL:string = ""
  private pokeData:pokeData | any

  constructor(
    private http:HttpClient
    
  ) { 
    this.baseURL = environment.pokeApi
  }

  getPokemon(pokemonName:string):Observable<pokeData>{
    this.pokeData = this.http.get<pokeData>(`${this.baseURL}${pokemonName}`)
  
  return this.pokeData
  }
}
