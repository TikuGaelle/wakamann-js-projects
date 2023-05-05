const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 },
]
const items2 = [1,2,3,4,5]

//includes method: doesn't take a function / returns true or false / mostly preferable for 1D arrays. 
const includes = items2.includes(3)
console.log(includes)

//reduce method: calculates the sum total of array values by taking in two parameters, the currentTotal, and the index respectively
const total = items.reduce(
    (currentTotal, item) => {
        return item.price + currentTotal
    },
0)
console.log(total)

//every method: returns true or false / checks for every item of the array
const hasExpensiveItems = items.every(
    (item) => {
        return item.price >= 100
    }
)
console.log(hasExpensiveItems)

//some method: returns true or false / checks for just one matching item of the array
const hasInexpensiveItems = items.some(
    (item) => {
        return item.price <= 100
    }
)
console.log(hasInexpensiveItems)

//forEach method: does not return anything
items.forEach(
    (item) => {
        console.log(item.name)
    }
)
//find method: returns just one element
const foundItem = items.find(
    (item) => {
        return item.name = 'Keyboard';
    }
)
console.log(foundItem)

// map method 
const itemNames = items.map(
    (item) => {
        return item.price;
    }
)
console.log(itemNames)

//filter method 
const filteredItems = items.filter(
    (item) => {
        return item.name == 'Bike';
        //return item.price <= 100;
    }
)
console.log(filteredItems)