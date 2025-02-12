import { Component } from '@angular/core';
import { BookingSearchComponent } from '../../../Feature/booking-search/booking-search.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [BookingSearchComponent, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  
}
