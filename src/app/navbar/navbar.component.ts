import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isExpanded = false;

  toggleNavbar() {
    this.isExpanded = !this.isExpanded;
  }
}  // <-- Se agregó esta llave para cerrar la clase
