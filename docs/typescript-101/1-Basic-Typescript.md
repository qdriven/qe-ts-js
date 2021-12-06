# Basic Typescript
## Install Typescript

## Hello World Typescript

- Hello World Typescript
```js
function greeter(person){
    return "Hello "+person
}

function greeterWithType(person:string){
    return "Hello "+person
}

let user="World";
console.log(greeter(user)
```
- How to Run it
  * compile typescript to javascript
  * run the compiled javascript

```sh
# compile
tsc helloworld.ts
# generate helloworld.js
ls helloworld.js
# run 
node helloworld.js
```


