import {Component, OnInit} from '@angular/core';
import {BreakpointService} from "../../services/breakpoint.service";
import {Observable} from "rxjs";

@Component({
  selector: 'header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit{

  isMobile$!: Observable<boolean>;

  constructor(private bpo: BreakpointService) {

  }

  ngOnInit() {
    this.isMobile$ = this.bpo.isMobile$;
  }
}
