import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HarryPotterService } from '../../services/harrypotter';
import { Character } from '../../models/character.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './characterdetails.html',
  styleUrl: './characterdetails.css'
})
export class Characterdetails implements OnInit {
  private route = inject(ActivatedRoute);
  private hpService = inject(HarryPotterService);

  character?: Character;
  loading = false;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.loading = true;
      this.hpService.getCharacterById(id).subscribe({
        next: (data) => {
          this.character = data[0];
          this.loading = false;
        },
        error: (err) => {
          console.error('Error loading character details:', err);
          this.loading = false;
        }
      });
    }
  }
}