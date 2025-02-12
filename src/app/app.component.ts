import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';

// Declaramos AOS si lo usas para animaciones
declare var AOS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title: string = 'portfolio'; // ✅ Correctly declared here

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    // No más modo oscuro
  }

  ngAfterViewInit(): void {
    // Inicializa AOS después de que se haya renderizado la vista
    AOS.init();
  }
}
