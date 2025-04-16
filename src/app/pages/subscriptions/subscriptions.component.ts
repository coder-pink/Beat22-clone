import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { PricingPlansComponent } from '../../components/pricing-plans/pricing-plans.component';
import { FaqComponent } from '../../components/faq/faq.component';


@Component({
  selector: 'app-subscriptions',
  imports: [HeaderComponent, PricingPlansComponent, FaqComponent],
  templateUrl: './subscriptions.component.html',
  styleUrl: './subscriptions.component.css'
})
export class SubscriptionsComponent {

}
