import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule],
  templateUrl: './characterfilter.html',
  styleUrl: './characterfilter.css',
})
export class Characterfilter {
    @Output() houseSelected = new EventEmitter<string>();

    houses = [
      "Gryffindor",
      "Slytherin",
      "Hufflepuff",
      "Ravenclaw",
      '',
    ];

    onHouseChange(value: string) {
      this.houseSelected.emit(value)
    }

}
