import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HarryPotterService } from '../../services/harrypotter';
import { Character } from '../../models/character.model';
import { Characterfilter } from '../characterfilter/characterfilter';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [
    RouterModule,
    Characterfilter,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ],
  templateUrl: './characterlist.html',
  styleUrl: './characterlist.css'
})
export class Characterlist implements OnInit {
  private hpService = inject(HarryPotterService);

  characters: Character[] = [];
  loading = false;

  ngOnInit(): void {
    this.loadAllCharacters();
  }

  loadAllCharacters(): void {
    this.loading = true;
    this.hpService.getAllCharacters().subscribe({
      next: (data) => {
        this.characters = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading characters:', err);
        this.loading = false;
      }
    });
  }

  onHouseSelected(house: string): void {
    if (!house) {
      this.loadAllCharacters();
      return;
    }

    this.loading = true;
    this.hpService.getCharactersByHouse(house).subscribe({
      next: (data) => {
        this.characters = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error filtering characters:', err);
        this.loading = false;
      }
    });
  }
}