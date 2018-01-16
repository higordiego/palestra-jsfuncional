const compose = (...fns) =>
    fns.reduce((f, g) => (...args) => f(g(...args)))

const finish = (phrase) => `${phrase}?`
const phrase = (greeting) => `${greeting} como vai você`
const greeting = (name) => `Olá ${name},`
const toUpper = (txt) => txt.toUpperCase()
const addNumber = text => text + ' Diego'


const sayGreetingFor = (name) =>
    compose(toUpper, finish, phrase, greeting, addNumber)(name)

console.log(sayGreetingFor('Higor'))