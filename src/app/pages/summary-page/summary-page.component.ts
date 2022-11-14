import { Component, OnInit } from '@angular/core'
import { transactions as data} from '../../data/transactions'

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent implements OnInit {
  transactions = data

  constructor() { }

  ngOnInit(): void {
  }
}
