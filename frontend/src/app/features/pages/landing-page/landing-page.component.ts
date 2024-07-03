import { Component } from '@angular/core';
import { DefaultButton } from '../../components/default-button/default-button.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [DefaultButton],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPage {

}
