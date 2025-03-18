import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, state, style, transition, animate, ɵBrowserAnimationBuilder } from '@angular/animations';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('400ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ProfileCardComponent implements OnChanges{
  @Input() profilePicture: string = '';
  @Input() name: string = '';
  @Input() designation: string = '';
  @Input() description: string = '';
  @Input() contact: { phone: string; email: string } = { phone: '', email: '' };

  ngOnChanges(changes: SimpleChanges) {
    console.log('Profile data changed:', changes);
  }
}
