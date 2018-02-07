import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  /**
   * constructor.
   * @param router
   */

  constructor(public router: Router) { }

  /*
  * ngOnInit
  */
  ngOnInit() {
  }

  /*
  * logout
  */
  public logout() {
    this.router.navigate(['login']);
  }

}
