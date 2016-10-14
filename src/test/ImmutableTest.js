const Immutable = require('immutable');

var SomeRecord = Immutable.Record({ foo: null });
var x = new SomeRecord({ foo: 'bar'  });
var y = x.set('foo', 'baz');
console.log(x.get('foo'))
console.log(x === y); // false

/*
let a = Immutable.fromJS({x : 1});

let b = Immutable.Record({x : 2});

console.log('a.x=' + a.x);
console.log('b.x=' + b.x);
console.log(a.x === b.x);*/
