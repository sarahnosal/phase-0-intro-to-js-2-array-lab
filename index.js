const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name) {
    cats.pop("Garfield");
}
function destructivelyRemoveFirstCat(name) {
    cats.shift("Milo");
}
function appendCat(name) {
    const newArray = [...cats];
    newArray.push(name)
    return newArray
}
function prependCat(name) {
    const newArray = [...cats];
    newArray.unshift(name)
    return newArray
}
function removeLastCat(name) {
    const newArray = [...cats];
    newArray.pop(0, cats.length -1);
    return newArray
}
function removeFirstCat(name) {
    const newArray = [...cats];
    newArray.shift(name)
    return newArray
}
