// Delete element into array

let arr = [23, 34, 5, 46, 17, 33, 32, 40]
console.log(arr)

// With for loop
for (let i = 0; i < arr.length - 1; i++) {
    if (i >= 4) {
        console.log(i)
        arr[i] = arr[i + 1]
    }
}
console.log(arr)


// With javascript functions
let arr2 = [123, 35, 56, 46, 17, 33, 2, 4]
arr2.splice(3, 1)
console.log(arr2)

