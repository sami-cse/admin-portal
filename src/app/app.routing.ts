import { ModuleWithProviders } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { ViewBookComponent } from './components/view-book/view-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { CanActivateViaAuthGuard } from './app.canactivate';
import { from } from 'rxjs';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    
  },
  {
    path: 'addNewBook',
    component: AddNewBookComponent,
    canActivate: [
      CanActivateViaAuthGuard
    ]
  },
  {
    path: 'viewBookList',
    component: BookListComponent,
    canActivate: [
      CanActivateViaAuthGuard
    ]
  },
  {
    path: 'viewBook/:id',
    component: ViewBookComponent,
    canActivate: [
      CanActivateViaAuthGuard
    ]
  },
  {
    path: 'editBook/:id',
    component: EditBookComponent,
    canActivate: [
      CanActivateViaAuthGuard
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);