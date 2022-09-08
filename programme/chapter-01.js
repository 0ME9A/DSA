// Insert element into array

// With for loop
let arr = [23, 34, 5, 46, 17, 33, 32, 40]

for (let i = arr.length-1; i >= 0; i--) {
    if (i >= 4) {
        arr[i+1] = arr[i]
        if (i===4){
            arr[i] = 99
        }
    }
}
console.log(arr)



// With javascript functions
let arr2 = [23, 34, 5, 46, 17, 33, 32, 40]

arr2.splice(3, 0, 66)
console.log(arr2)