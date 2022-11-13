import {ITransaction} from '../models/transactions'
import {IAcountNums} from '../models/acounts'

export const acountNums = (transactions: ITransaction[]) => {
	let acNums: IAcountNums[] = []
	let longName: string
	let type: 'income' | 'outcome' | 'loan' | 'investment'
	let obj: IAcountNums | undefined

	transactions.forEach(transaction => {
		longName = transaction.name.first + ' ' + transaction.name.last
		type = transaction.type

		obj = acNums.find(e => (e.name === longName) && (e.type === type))
		if (!obj) {
			acNums.push({
				name: longName,
				type: type,
				count: 1
			})
		} else {
			obj.count++
		}
	})

	return acNums
}
