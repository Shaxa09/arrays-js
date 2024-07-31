
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

// let students = [
//   {
//       name: "Davlat",
//       age: 15,
//       isMarried: true,
//       wifes: ["Asad"]
//   },
//   {
//       name: "Jony",
//       age: 20,
//       isMarried: false,
//       wifes: []
//   },
//   {
//       name: "Asad",
//       age: 14,
//       isMarried: false,
//       wifes: ["Shaxriyor"]
//   },
//   {
//       name: "Danila",
//       age: 15,
//       isMarried: false,
//       wifes: []
//   },
//   {
//       name: "Shaxriyor",
//       age: 15,
//       isMarried: false,
//       wifes: []
//   },
// ]

// let oldest = 0;

// students.find((student) => {
//   if (student.age > oldest) {
//     oldest = student.age
//   }
// });


// console.log("Oldest is:", oldest + " y.o.");




// const cars = [
//   {
//       make: "GM", 
//       model: "Gentra",
//       color: "black",
//       price: 13000,
//       hp: 105
//   },
//   {
//       make: "Nissan", 
//       model: "GTR - r35",
//       color: "blue",
//       price: 124000, 
//       hp: 570
//   },
//   {
//       make: "Pagani", 
//       model: "Huary",
//       color: "red",
//       price: 3400000, 
//       hp: 730
//   },
//   {
//       make: "GM", 
//       model: "Tahoe",
//       color: "black",
//       price: 100000, 
//       hp: 370
//   },
//   {
//       make: "Toyota", 
//       model: "supra",
//       color: "white",
//       price: 24000, 
//       hp: 380
//   }
// ]

// const discount = prompt("Сколько процентов скидку вы хотите?")

// cars.forEach(car => {
//   car.price -= (discount * car.price / 100)
// });

// console.table(cars);

let arr = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut au`tem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "userId": 1,
        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    },
    {
        "userId": 1,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
    },
]

let a = {
    count: 0,
    arr: []
}

let b = {
    count: 0,
    arr: []
}

arr.forEach(task => {
    if (task.completed) {
        a.arr.push(task);  
        a.count++;         
    } else {
        b.arr.push(task);  
        b.count++;         
    }
});

console.log(a);
console.log(b);
