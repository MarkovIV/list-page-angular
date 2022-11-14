import { Component, OnInit, Input } from '@angular/core'
import { ITransaction } from '../../models/transactions'
import { typeIdMappingReverse } from '../../helpers/typeid-mapping'

@Component({
  selector: 'app-type-card',
  templateUrl: './type-card.component.html',
  styleUrls: ['./type-card.component.scss']
})

export class TypeCardComponent implements OnInit {
  @Input() transactions: ITransaction[]
  @Input() typeStr: 'income' | 'outcome' | 'loan' | 'investment'
  transationsByTypeCount: number
  typeNum: string

  constructor() { }

  ngOnInit(): void {
    this.transationsByTypeCount = this.transactions.filter(tr => tr.type === this.typeStr).length
    this.typeNum = typeIdMappingReverse(this.typeStr)
  }
}
