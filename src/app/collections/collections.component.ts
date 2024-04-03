import { Component, OnInit } from '@angular/core';
import { MuscleService } from '../muscle.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css'
})
export class CollectionsComponent implements OnInit {
  muscleDetails: any;

  constructor(private muscleService: MuscleService) { }

  ngOnInit() {
    var muscle = 'biceps';

    console.log('ssssss ook')
    this.muscleService.getDetails(muscle).subscribe(
      (response: any) => {
        this.muscleDetails = response;
      },
      (error) => {
        console.error('Erreur lors de la récupération des détails du muscle:', error);
      }
    );
  }
}


