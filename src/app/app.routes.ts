import { Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { SuccessComponent } from './success/success.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path:'', component: FeedbackComponent },
    { path: 'success', component: SuccessComponent },
    { path: '**', component: PageNotFoundComponent }
  ];
  
