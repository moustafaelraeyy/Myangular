import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(private routnav: Router) { }

  ngOnInit() {
  }
  creat(form) {
    console.log(form.value)
  }
  gotolist() {
    this.routnav.navigate(['/contactlist'])
  }

}
