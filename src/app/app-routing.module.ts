import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './allcomponent/contact-list/contact-list.component';
import { AddContactComponent } from './allcomponent/add-contact/add-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';



const routes: Routes = [
  {path:"",component:AddContactComponent},
  {path:"contactlist",component:ContactListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule,BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
