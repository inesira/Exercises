import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { MuscleService } from '../muscle.service';

@Component({
  selector: 'app-men',
  standalone: true,
  imports: [NavBarComponent, CommonModule],
  templateUrl: './men.component.html',
  styleUrl: './men.component.scss'
})

export class MenComponent implements OnInit {
  muscles: any;
  constructor( private muscleService: MuscleService){ }
  
  ngOnInit(){
    this.muscleService.getConfig().subscribe((muscle): any => {
      this.muscles = muscle;
    })
  }
}
