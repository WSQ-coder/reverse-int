module.exports = function reverse (n) {
  return +n.toString().split('').filter( x => parseInt(x)==x ).reverse().join('')
}
