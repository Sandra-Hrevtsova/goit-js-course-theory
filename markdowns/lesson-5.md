OBJECTS

C R U D
CREATE READ UPDATE DELETE

1. CREATE new object
- by literal {}
- by Object.create()

2. Properties
- property = key: value,

- Access to properties - READ values:
-- object.propName
-- object['key-name'] 

- inner properties: value of key may be another object 

- CREATE new prop:
-- object.newProp
-- object['new-prop'] 

- short props user = { name, age }

- calculated props student[propName] where propName = 'course'

3. UPDATE prop values
- object.propName = new value
- object['key-name'] = new value

4. DELETE props
- delete object.propName || delete object['key-name']

5. Methods = props with function as value
- access to object by this
`object.prop == this.prop`

6. for...in

7. constructor Object:
- hasOwnProperty()
- keys()
- values()
- entries()

8. Array of objects