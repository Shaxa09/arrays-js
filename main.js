
// let nameToDelete = prompt("Введите имя для удаления: " + students.join(", "));

// if (students.includes(nameToDelete)) {
//     let index = students.indexOf(nameToDelete);
//     students.splice(index, 1);
//     alert("Обновленный список: " + students.join(", "));
// } else {
//     alert("Имя не найдено в списке.");
// }

// -Callback-

//(name) => name[0] === "D"
// console.log(
//     students.find((name) => name[0] === "D")
//     students.filter((name) => name[0] === "D")
//     students.map((name) => name[0] === "D")
//     students.forEach((name) => name[0] === "D")
// )
// find - vozvrashyaet samiy perviy kotoriy naydet
// filter - vozvrashayet vse v massive
// map - vozvrashyaet true ili false
// forEach - vozvrashyaet underfined

// const students = ["Davlat", "Feruz", "Asad", "Danya"]

// const callback = (name) => name.typeof()

// console.log(
    //     arr.find(callback)
    // )



// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let evens = []
// let odds = []

// nums.filter((number) => {
//     if (number % 2 === 0) {
//         evens.push(number)
//     } else {
//         odds.push(number)
//     }
// })

// console.log(
//     {
//        evens,
//        odds 
//     }
// );

// let shuffled = [2, 5, 1, 3, 4, 6, 99, 7, 8, 0, 9, 44, 66, 24, 67]

// console.log(
//     shuffled.sort((a, b) => b - a).pop(),
//     shuffled.sort((a, b) => a - b).pop()
// );

let shuffled = [1, 2, 3, 4];

let total = 0;
shuffled.forEach(num => {
  total += num;
});

let average = total / shuffled.length;

console.log("Total:", total);
console.log("Average:", average);