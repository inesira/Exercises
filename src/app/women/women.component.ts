import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-women',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './women.component.html',
  styleUrl: './women.component.scss'
})
export class WomenComponent{
  // muscles: any;
  // constructor( private muscleService: MuscleService){ }
  
  // ngOnInit(){
  //   this.muscleService.getConfig().subscribe((muscle): any => {
  //     this.muscles = muscle;
  //   })
  // }

}
