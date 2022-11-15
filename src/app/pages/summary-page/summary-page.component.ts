import { Component, OnInit } from '@angular/core'
import { transactions as data} from '../../data/transactions'
import { BreakpointObserver } from '@angular/cdk/layout'
import { Subject, takeUntil, tap } from 'rxjs'


@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})

export class SummaryPageComponent implements OnInit {
  transactions = data
  isDesktopScreen = false

  private readonly destroy$ = new Subject<void>()

  constructor(private readonly breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(min-width: 770px)'])
      .pipe(
        tap((breakpoints) => {
          this.isDesktopScreen = breakpoints.matches
        }),
        takeUntil(this.destroy$)
      )
      .subscribe()
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
