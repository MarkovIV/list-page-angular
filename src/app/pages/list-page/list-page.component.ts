import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { transactions } from '../../data/transactions'
import { acountNums } from '../../helpers/acount-nums'
import { typeIdMapping } from '../../helpers/typeid-mapping'
import { IAcountNums } from '../../models/acounts'

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})

export class ListPageComponent implements OnInit {
  acountCounts = acountNums(transactions)
  typeId: string
  filteredCounts: IAcountNums[]

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.typeId = typeIdMapping(params['tab'])

        const incomeTab = document.querySelector('#income-tab')
        const outcomeTab = document.querySelector('#outcome-tab')
        const loansTab = document.querySelector('#loans-tab')
        const investmentsTab = document.querySelector('#investments-tab')

        switch (this.typeId) {
          case 'outcome':
            incomeTab?.classList.remove('active')
            outcomeTab?.classList.add('active')
            loansTab?.classList.remove('active')
            investmentsTab?.classList.remove('active')
            break
          case 'loan':
            incomeTab?.classList.remove('active')
            outcomeTab?.classList.remove('active')
            loansTab?.classList.add('active')
            investmentsTab?.classList.remove('active')
            break
          case 'investment':
            incomeTab?.classList.remove('active')
            outcomeTab?.classList.remove('active')
            loansTab?.classList.remove('active')
            investmentsTab?.classList.add('active')
            break
          default:
            incomeTab?.classList.add('active')
            outcomeTab?.classList.remove('active')
            loansTab?.classList.remove('active')
            investmentsTab?.classList.remove('active')
        }

        this.filteredCounts = this.acountCounts.filter(ac => ac.type === this.typeId).sort()
      }
    )
  }
}
