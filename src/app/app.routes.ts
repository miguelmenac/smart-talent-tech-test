import { Routes } from '@angular/router';
import { HomeComponent } from './Feature/home/home.component';
import { ManageComponent } from './Feature/hotels/manage/manage.component';
import { HotelDetailComponent } from './Feature/hotels/hotel-detail/hotel-detail.component';
import { BookingsManageComponent } from './Feature/booking/bookings-manage/bookings-manage.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },

    { path: '**', component: HomeComponent },

    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'manage',
        component: ManageComponent
    },
    {
        path: 'bookings',
        component: BookingsManageComponent
    },
    {
        path: 'detail/:id',
        component: HotelDetailComponent
    },
];
