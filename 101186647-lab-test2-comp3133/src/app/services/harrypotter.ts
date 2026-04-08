import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class HarryPotterService {
  private http = inject(HttpClient);
  private apiUrl = 'https://hp-api.onrender.com/api'

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.apiUrl}/characters`);
  }

  getCharactersByHouse(house: string): Observable<Character[]>{
    return this.http.get<Character[]>(`${this.apiUrl}/characters/house/${house}`)
  }

  getCharacterById(id: string): Observable<Character[]>{
    return this.http.get<Character[]>(`${this.apiUrl}/characters/${id}`)
  }

}
