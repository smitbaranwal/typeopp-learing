import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserListRoutingModule } from '@app/user-list/user-list-routing.module';
import { UserListComponent } from './user-list.component';

@NgModule({
  imports: [
    CommonModule,
    UserListRoutingModule
  ],
  declarations: [UserContainerComponent, UserListComponent]
})
export class UserListModule { }
