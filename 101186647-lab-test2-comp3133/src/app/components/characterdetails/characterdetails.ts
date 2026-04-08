import { Component, OnInit, inject, ChangeDetectorRef  } from '@angular/core';
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
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.loading = true;
      this.hpService.getCharacterById(id).subscribe({
         next: (data) => {
          console.log('full data:', data);
          console.log('data[0]:', data[0]);

          this.character = data[0];
          this.loading = false;

          console.log('character after set:', this.character);
          console.log('loading after set:', this.loading);

          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Error loading character details:', err);
          this.loading = false;
        }
      });
    }
  }
}