import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'default-button',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './default-button.component.html',
  styleUrl: './default-button.component.css'
})
export class DefaultButton {
  buttonClick() {
    alert("A button was clicked");
  }
}
