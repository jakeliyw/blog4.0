function f (v) {
  console.log(v)
}

let a = { b: 'bbb' }
Object.defineProperty(a, 'abc', { // vue base on es5.
  get () {
    return this.b
  },

  set (v) {
    f(v)
  },
})
a.abc = 'abcedfg'
console.log(a.abc)
