const {matchSorter} = require('match-sorter')

console.log(matchSorter);

const list = ['hi', 'hey', 'hello', 'sup', 'yo']
const result = matchSorter(list, 'h') // ['hello', 'hey', 'hi']

console.log(result);