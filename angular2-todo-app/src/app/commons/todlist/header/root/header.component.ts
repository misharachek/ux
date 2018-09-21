import {Component} from '@angular/core';
import {locales} from './locales';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  locales = locales;
}
