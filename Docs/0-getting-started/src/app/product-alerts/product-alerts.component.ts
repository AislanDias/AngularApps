import { Component, Input } from '@angular/core';
import { Product } from '../products';

// Key features in the @Component() are as follows:
//
// - The selector, app-product-alerts, identifies the component. By convention, Angular component selectors begin with the prefix app-, followed by the component name.
// - The template and style filenames reference the component's HTML and CSS
// - The @Component() definition also exports the class, ProductAlertsComponent, which handles functionality for the component
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product!: Product;
}
