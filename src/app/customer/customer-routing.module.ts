import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerContainerComponent } from '@app/customer/customer-container/customer-container.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerContainerComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
