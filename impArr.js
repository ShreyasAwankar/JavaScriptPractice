// Using .split() & .join() methods.....

let info = 'Shreyas,Awankar,1997,25'
const splittedArrayFromInfo = info.split(',') // ',' is the delimeter here means array will be splitted bt  commas.
console.log(splittedArrayFromInfo)

const joinedArray = splittedArrayFromInfo.join(' ') // Array will be joined as a whole string with the delimeter ' ' (space) between each array element.
console.log(joinedArray)



// Array Destructuring.......
let infoArray = ['Shreyas', 'Awankar', 'Yeola', 1997, 25];

const [firstName, lastName, ...otherInfo] = infoArray; // '...' is the spread opertor.

console.log(`First Name: ${firstName}, Last Name: ${lastName}`)

console.log(otherInfo)


