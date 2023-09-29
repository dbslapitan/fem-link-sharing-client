import {Injectable, OnInit} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BreakpointService{

  isMobile$!: Observable<boolean>;

  constructor(private breakpoint: BreakpointObserver) {
    this.isMobile$ = this.breakpoint.observe('(max-width: 767px)').pipe(
      map(({matches}) => matches)
    );
  }
}
