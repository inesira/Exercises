// import { Component } from '@angular/core';
// import { NavBarComponent } from '../nav-bar/nav-bar.component';

// @Component({
//   selector: 'app-contact',
//   standalone: true,
//   imports: [NavBarComponent],
//   templateUrl: './contact.component.html',
//   styleUrl: './contact.component.scss'
// })
// export class ContactComponent {

// }

import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { MuscleService } from '../muscle.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavBarComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent implements OnInit {

  muscles: any;
  constructor( private muscleService: MuscleService){ }
  
  ngOnInit(){
    this.muscleService.getConfig().subscribe((muscle): any => {
      this.muscles = muscle;
    })
  }
}
