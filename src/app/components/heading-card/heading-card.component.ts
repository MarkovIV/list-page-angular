import { Component, OnInit, Input } from '@angular/core'
import { ITransaction } from '../../models/transactions'

@Component({
  selector: 'app-heading-card',
  templateUrl: './heading-card.component.html',
  styleUrls: ['./heading-card.component.scss']
})

export class HeadingCardComponent implements OnInit {
  @Input() transactions: ITransaction[]
  transationsCount: number

  constructor() { }

  ngOnInit(): void {
    this.transationsCount = this.transactions.length
  }
}
