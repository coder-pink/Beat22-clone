import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqs = [
    'Will I receive a refund if I choose to upgrade to a higher plan?',
    'Can I change from a monthly to an annual plan within the same subscription?',
    'Is it possible to upgrade from Premium to Pro plans?',
    'What payment method can I use to subscribe?',
    'Can I cancel my subscription at any time?',
    'Is there customer support available for questions related to subscriptions?'
  ];

  openIndex: number | null = null;

  toggleFAQ(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
