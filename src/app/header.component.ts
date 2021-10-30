import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `    <header class="header">   
  <h3 class = "utl1">We Care</h3>
  <div>
      <ul>
          <li> 
              <span><i class="fas fa-phone-alt"></i>&nbsp;Call us: 07692:222460</span>
          </li>

      </ul>
  </div>
</header>`,
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
}