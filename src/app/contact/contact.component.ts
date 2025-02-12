import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  onSubmit(event: Event) {
    event.preventDefault();
    alert('¡Gracias por contactarme! Me pondré en contacto contigo pronto.');
    (event.target as HTMLFormElement).reset();
  }
}
