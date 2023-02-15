module.exports = function reverse (n) {
  return parseInt( n.toString().split('').filter( x => parseInt(x)==x ).reverse().join('') )
}
