1. Callback
High-order function get Callback as a parameter

function myHof(param, callback) {
    callback(param)
}

2. Inline Callback

myHof(param, function() {})

3. Any callback

myHof(cb1, ..., cbN)

4. Abstruction
- cicle For

5. .forEach() VS for || for...of

6. Arrow function
- () => { ... } || () => ...
- [arguments] -> (...args)
- myHof(param, () => {})

7. Imperative VS Declarative