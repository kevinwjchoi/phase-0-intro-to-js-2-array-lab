// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}

const copyOfCats = [...cats];

function appendCat(name){
    return [...cats, name];

}
function prependCat(name){
    return [name, ...cats];
}

function removeLastCat (){
    copyOfCats.splice(-1);
    return copyOfCats;
}  

function removeFirstCat(){
    return cats.slice(1);
    
}
