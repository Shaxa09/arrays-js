
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

// let arr = [
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "delectus aut au`tem",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 2,
//         "title": "quis ut nam facilis et officia qui",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 3,
//         "title": "fugiat veniam minus",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 4,
//         "title": "et porro tempora",
//         "completed": true
//     },
//     {
//         "userId": 1,
//         "id": 5,
//         "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 6,
//         "title": "qui ullam ratione quibusdam voluptatem quia omnis",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 7,
//         "title": "illo expedita consequatur quia in",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 8,
//         "title": "quo adipisci enim quam ut ab",
//         "completed": true
//     },
//     {
//         "userId": 1,
//         "id": 9,
//         "title": "molestiae perspiciatis ipsa",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 10,
//         "title": "illo est ratione doloremque quia maiores aut",
//         "completed": true
//     },
// ]

// let a = {
//     count: 0,
//     arr: []
// }

// let b = {
//     count: 0,
//     arr: []
// }

// arr.forEach(task => {
//     if (task.completed) {
//         a.arr.push(task);  
//         a.count++;         
//     } else {
//         b.arr.push(task);  
//         b.count++;         
//     }
// });

// console.log(a);
// console.log(b);
// ===================================================================================================

// const order = {
//     orderId: 12345,
//     customer: {
//         name: "Мария Петрова",
//         email: "maria.petrova@example.com"
//     },
//     items: [
//         {
//             productId: 1,
//             productName: "Ноутбук",
//             quantity: 1,
//             price: 50000
//         },
//         {
//             productId: 2,
//             productName: "Мышь",
//             quantity: 2,
//             price: 1500
//         }
//     ]}

//     const user = {
//         id: 1,
//         name: "Иван Иванов",
//         age: 30,
//         address: {
//             street: "ул. Ленина",
//             city: "Москва",
//             zipCode: "101000"
//         },
//     };
    
// const newObj = Object.assign({}, user, {passport})
// Object.freeze(user) // sub-zero
// const keys = Object.keys(user) // ["name", "age", "gender"]
// const values = Object.values(user) // ["Davlik", 15, "w"]
// const entries = Object.entries(user) 


// ТЗ = тех задание
// 1. Создать два комплексных объекта
// 2. Соеденить эти два объекта в одну переменную под названием newObject (не мутируя оригинальные объекты)
// 3. В переменную keys_arr получить все ключи из нового объекта 
// 4. В переменную values_arr получить все значения из нового объекта 
// 5. В новую переменную слить два массива в одно целое (keys_arr, values_arr)

// 2. ========================================
// const newObject = Object.assign({}, user, {order});

// console.log(newObject);
// 3. ========================================
// const keys_arr = Object.keys(newObject);

// console.log(keys_arr);
// 4. ========================================
// const values_arr = Object.values(newObject);

// console.log(values_arr);
// 5. ========================================
// const combined_arr = keys.arr.concat(values_arr)

// console.log(combined_arr);
// 6. ========================================
// let types = {
//     string: [],
//     number: [],
//     object: [],
//     boolean: [],

// }

// combined_arr.filter((item) => {
//     const type  = typeof вitem

//     if(type === "string") {
//         types.string.push(item)
//     } else if (type === "number") {
//         types.number.push(item)
//     } else if (type === "object") {
//         types.object.push(item)
//     } else if (type === "boolean") {
//         types.boolean.push(item)
//     }
// });

// console.log(types)
// // ==========================================================================================

// Раскидать людей в разные массивы в зависимости от их почты
    let users = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            }
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
            "address": {
                "street": "Douglas Extension",
                "suite": "Suite 847",
                "city": "McKenziehaven",
                "zipcode": "59590-4157",
                "geo": {
                    "lat": "-68.6102",
                    "lng": "-47.0653"
                }
            },
            "phone": "1-463-123-4447",
            "website": "ramiro.info",
            "company": {
                "name": "Romaguera-Jacobson",
                "catchPhrase": "Face to face bifurcated interface",
                "bs": "e-enable strategic applications"
            }
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
            "address": {
                "street": "Hoeger Mall",
                "suite": "Apt. 692",
                "city": "South Elvis",
                "zipcode": "53919-4257",
                "geo": {
                    "lat": "29.4572",
                    "lng": "-164.2990"
                }
            },
            "phone": "493-170-9623 x156",
            "website": "kale.biz",
            "company": {
                "name": "Robel-Corkery",
                "catchPhrase": "Multi-tiered zero tolerance productivity",
                "bs": "transition cutting-edge web services"
            }
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
            "address": {
                "street": "Skiles Walks",
                "suite": "Suite 351",
                "city": "Roscoeview",
                "zipcode": "33263",
                "geo": {
                    "lat": "-31.8129",
                    "lng": "62.5342"
                }
            },
            "phone": "(254)954-1289",
            "website": "demarco.info",
            "company": {
                "name": "Keebler LLC",
                "catchPhrase": "User-centric fault-tolerant solution",
                "bs": "revolutionize end-to-end systems"
            }
        },
        {
            "id": 6,
            "name": "Mrs. Dennis Schulist",
            "username": "Leopoldo_Corkery",
            "email": "Karley_Dach@jasper.info",
            "address": {
                "street": "Norberto Crossing",
                "suite": "Apt. 950",
                "city": "South Christy",
                "zipcode": "23505-1337",
                "geo": {
                    "lat": "-71.4197",
                    "lng": "71.7478"
                }
            },
            "phone": "1-477-935-8478 x6430",
            "website": "ola.org",
            "company": {
                "name": "Considine-Lockman",
                "catchPhrase": "Synchronised bottom-line interface",
                "bs": "e-enable innovative applications"
            }
        },
        {
            "id": 7,
            "name": "Kurtis Weissnat",
            "username": "Elwyn.Skiles",
            "email": "Telly.Hoeger@billy.biz",
            "address": {
                "street": "Rex Trail",
                "suite": "Suite 280",
                "city": "Howemouth",
                "zipcode": "58804-1099",
                "geo": {
                    "lat": "24.8918",
                    "lng": "21.8984"
                }
            },
            "phone": "210.067.6132",
            "website": "elvis.io",
            "company": {
                "name": "Johns Group",
                "catchPhrase": "Configurable multimedia task-force",
                "bs": "generate enterprise e-tailers"
            }
        },
        {
            "id": 8,
            "name": "Nicholas Runolfsdottir V",
            "username": "Maxime_Nienow",
            "email": "Sherwood@rosamond.me",
            "address": {
                "street": "Ellsworth Summit",
                "suite": "Suite 729",
                "city": "Aliyaview",
                "zipcode": "45169",
                "geo": {
                    "lat": "-14.3990",
                    "lng": "-120.7677"
                }
            },
            "phone": "586.493.6943 x140",
            "website": "jacynthe.com",
            "company": {
                "name": "Abernathy Group",
                "catchPhrase": "Implemented secondary concept",
                "bs": "e-enable extensible e-tailers"
            }
        },
        {
            "id": 9,
            "name": "Glenna Reichert",
            "username": "Delphine",
            "email": "Chaim_McDermott@dana.io",
            "address": {
                "street": "Dayna Park",
                "suite": "Suite 449",
                "city": "Bartholomebury",
                "zipcode": "76495-3109",
                "geo": {
                    "lat": "24.6463",
                    "lng": "-168.8889"
                }
            },
            "phone": "(775)976-6794 x41206",
            "website": "conrad.com",
            "company": {
                "name": "Yost and Sons",
                "catchPhrase": "Switchable contextually-based project",
                "bs": "aggregate real-time technologies"
            }
        },
        {
            "id": 10,
            "name": "Clementina DuBuque",
            "username": "Moriah.Stanton",
            "email": "Rey.Padberg@karina.biz",
            "address": {
                "street": "Kattie Turnpike",
                "suite": "Suite 198",
                "city": "Lebsackbury",
                "zipcode": "31428-2261",
                "geo": {
                    "lat": "-38.2386",
                    "lng": "57.2232"
                }
            },
            "phone": "024-648-3804",
            "website": "ambrose.net",
            "company": {
                "name": "Hoeger LLC",
                "catchPhrase": "Centralized empowering task-force",
                "bs": "target end-to-end models"
            }
        }
    ]
    let emails = {
        org: [],
        net: [],
        info: []
    }

    let other = []
        users.forEach(user => {
        let domen = user.email.split('@')[1].split('.')[1];
        
        if (domen === 'org') {
            emails.org.push(user);
        } else if (domen === 'net') {
            emails.net.push(user);
        } else if (domen === 'info') {
            emails.info.push(user);
        } else {
            other.push(user);
        }
    });
    
    console.log(emails);
    console.log(other);
    