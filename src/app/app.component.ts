import { Component } from '@angular/core';

// Its a METADATA component in the form of DECORATOR(component decorator)
// It contains the METADATA and TEMPLATE(templateUrl) part of the METADAATA
@Component({
  selector: 'app-root',     // custome HTML tag this represents AppComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Its a CLASS component
export class AppComponent {
  title = 'Angular-Practice';
  proTitle = 'only for ANGULAR PRACTICE purpose'
}
