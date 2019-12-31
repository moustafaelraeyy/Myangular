import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './allcomponent/contact-list/contact-list.component';
import { AddContactComponent } from './allcomponent/add-contact/add-contact.component';


const routes: Routes = [
  {path:"",component:AddContactComponent},
  {path:"contactlist",component:ContactListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
