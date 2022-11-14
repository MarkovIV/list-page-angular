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

export const typeIdMappingReverse = (typeStr: string) => {
	switch (typeStr) {
    case 'outcome':
      return '1'
    case 'loan':
      return '2'
    case 'investment':
      return '3'
    default:
      return '0'
  }
}
