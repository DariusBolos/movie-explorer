import { Component } from '@angular/core';
import { DefaultButton } from '../../components/default-button/default-button.component';
import { Navbar } from '../../../core/components/navbar/navbar.component';
import { ImageGalleria } from 'app/features/components/image-galleria/image-galleria.component';
import { Banner } from 'app/features/components/banner/banner.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [DefaultButton, Navbar, Banner, ImageGalleria],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPage {

}
