1. Types
- Function Declaration (~you may call it before declaration~)
- Function Expression
- Arrow Function

2. Parameters
- default params
- (param1, ..., paramN)
- (...params)

3. Arguments
- (arg1, ..., argN)
- (..., undefined, ...)
- pseudo-array arguments => [...arguments] || Array.from(arguments)
- REST

4. patterns
- Guard Clauses (https://medium.com/@timothydan/javascript-guard-clauses-64b999e3240)
`if (condition) return value`

5. Scopes
- Global
- { block }

6. Call Stack
- Last IN => First OUT || LIFO

-- PRACTICE --
`Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.`

'HelloWorld' => 'hello_world'