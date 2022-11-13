export interface IAcountNums {
  name: string
  type: 'income' | 'outcome' | 'loan' | 'investment'
  count: number
}