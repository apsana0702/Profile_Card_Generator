import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from "./profile-card/profile-card.component";
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileCardComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  profilePicture: string = '';
  name: string = '';
  designation: string = '';
  description: string = '';
  contact: { phone: string; email: string } = { phone: '', email: '' };
  showCard: boolean = false;

  generateProfile() {
    this.showCard = false; // Hide the card first
  setTimeout(() => {
    this.showCard = true; // Show the card after a short delay
  }, 10);
}
}
