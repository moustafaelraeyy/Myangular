import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  {data} from 'contacts.json';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  data :{} [] = data;
  constructor(private routnav:Router ) { }

  ngOnInit() {
  }
  backtoform(){
    this.routnav.navigate(['/'])


  }
  
  }

