import { Component, inject, Input } from '@angular/core';
import imports from './imports.hotel';
import { Hotel } from '../../../Core/models/hotel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel',
  imports: [imports],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.scss',
})
export class HotelComponent {
  router = inject(Router);
  @Input() hotel!: Hotel;
  defaultImage = 'https://firebasestorage.googleapis.com/v0/b/test-project-6366a.firebasestorage.app/o/no-image.jpg?alt=media&token=c72a7fa0-7fd5-44c0-a948-4f83e5861939';

  navigate(id: string) {
    this.router.navigateByUrl(`detail/${id}`);
  }
}
