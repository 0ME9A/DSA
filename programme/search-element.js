// Search element into array


let arr = [23, 34, 5, 46, 17, 33, 32, 40]
let searchInt = 46

for (let i in arr){
    if (arr[i]===searchInt){
        console.log(`We found:-  ${arr[i]} at position: ${i}`)
        break;
    }
}
