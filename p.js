// let arr = [1,2,3,5,6]
// let str = ''
// let newstr = str.concat(...arr)
// console.log(newstr)
// let num = Number(newstr) + 1
// console.log(num)
// let string = num.toString()
// console.log(string)
// let array = []
// for (let i = 0; i < string.length; i++) {


// }
// array = arr.map(Number)
// console.log(array)
// a = BigInt(1112522222222265555551116 + 1)
// console.log(a)
// arr = [1, 0,3, 2,3]
// let count = 0

// for (let i = 0; i < arr.length ; i++) {
// for(let j =  1 ; j < arr.length ; j++)
// {
//         if( i + j == arr[i] + arr[j])
        
//             count ++
        
    
// }
    // if ((i + (i + 1)) == (arr[i] + arr[i + 1])) {
    //     count++
    // }
    // if(i  == arr.length -1)
    // {
    //     if( 0 + i == (arr[0]+arr[i]))
    //     count ++
    // }

// }

// console.log(count)
let arr = [ 4,5,2,1,7,6]
let m = arr[0]
arr[0] = -1
for(let i =1; i<arr.length ; i++)
{
    if(m > arr[i])
    
    if(arr[i+1] < arr[i])
    arr[i+1] = arr[i]
}

console.log(arr)