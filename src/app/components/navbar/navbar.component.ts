import { Component, OnInit } from '@angular/core';
import { window } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isMenuOpen = false;
  innerWidth: any;

  constructor() { }

  ngOnInit(): void {
  }

  handleOpenMenu(){
    this.isMenuOpen = !this.isMenuOpen
    if(this.isMenuOpen){

    }
  }

}
