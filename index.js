
const cats = ["Milo", "Otis", "Garfield"]
console.log(cats)

function destructivelyAppendCat(name = "Ralph") {
     cats.push(name);
}


function destructivelyPrependCat(name = "Bob") {
    cats.unshift(name);
}


function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}


function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}  


function appendCat(name) {
    return [...cats, name];
    
}
appendCat("Broom")

function prependCat(name) {
    return [name, ...cats];
}
prependCat("Arnold")

function removeLastCat(name) {
   return cats.slice(0, cats.length-1);
}

function removeFirstCat() {
    return cats.slice(1)
}
