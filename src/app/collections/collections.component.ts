// import { Component, OnInit } from '@angular/core';
// import { MuscleService } from '../muscle.service';
// import { NavBarComponent } from '../nav-bar/nav-bar.component';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-collections',
//   standalone: true,
//   imports: [NavBarComponent, CommonModule],
//   templateUrl: './collections.component.html',
//   styleUrl: './collections.component.css'
// })
// export class CollectionsComponent implements OnInit {

//   muscles: any[] = [];

//   constructor(private muscleService: MuscleService) { }

//   ngOnInit() {
//     this.muscleService.getMuscles('biceps').subscribe(data => {
//       this.muscles = data;
//     });
//   }
// }


import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';


@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.scss'
})
export class CollectionsComponent {

}

