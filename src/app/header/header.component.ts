import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nav = [
    {
        link: '/books', name: 'Books' 
    },
    { 
        link: '/authors', name: 'Authors'
    },
    {
        link: '/admin/addbookadmin', name: 'Add Book'
    },
    {
        link: '/admin/addauthoradmin', name: 'Add Author'
    },
    {
        link: '/admin/deletebookadmin', name: 'Delete Book'
    },
    {
        link: '/admin/deleteauthoradmin', name: 'Delete Author'
    }

]
title="Library App";
  constructor() { }

  ngOnInit(): void {
  }

}
