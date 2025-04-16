import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing-plans',
  standalone: true,
  imports: [CommonModule],
 
  templateUrl: './pricing-plans.component.html',
  // styleUrl: './pricing-plans.component.css'
  styleUrls: ['./pricing-plans.component.css']
})
export class PricingPlansComponent {
  billingType: string = 'monthly';

  plans = [
    {
      title: 'Basic',
      features: [
        '20 Beat Uploads',
        'Retain 80% Earnings',
        'Offer All Licenses',
        'Basic Stats',
        'Direct Bank Transfer'
      ]
    },
    {
      title: 'Premium',
      features: [
        'Unlimited Uploads',
        'Retain 100% Earnings',
        'Advanced Analytical Insights',
        'Editorial Playlist Consideration',
        'Blue Verification',
        '& more'
      ]
    },
    {
      title: 'Pro',
      features: [
        'Unlimited Uploads',
        'Retain 100% Earnings',
        'Advanced Analytical Insights',
        'Beat Placement Service',
        'Golden Verification',
        'Priority Access To New Features',
        '& more'
      ]
    }
  ];

  setBilling(type: string) {
    this.billingType = type;
  }
}
