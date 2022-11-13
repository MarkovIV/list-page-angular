export const typeIdMapping = (typeInt: string) => {
	switch (typeInt) {
    case '1':
      return 'outcome'
    case '2':
      return 'loan'
    case '3':
      return 'investment'
    default:
      return 'income'
  }
}
