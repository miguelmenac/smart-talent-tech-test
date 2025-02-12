import { Routes } from '@angular/router';
import { HomeComponent } from './Feature/home/home.component';
import { ManageComponent } from './Feature/hotels/manage/manage.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },

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
        component: HomeComponent
    }, 
];
