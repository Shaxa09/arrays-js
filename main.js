
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



    const arr = ['Feruz', 22, true, null];
    let str = [];
    let num = [];
    let bool = [];
    let obj = [];
    
    str = arr.filter(element => typeof element === 'string');
    num = arr.filter(element => typeof element === 'number');
    bool = arr.filter(element => typeof element === 'boolean');
    obj = arr.filter(element => typeof element === 'object');
    
    console.log(str);
    console.log(num);
    console.log(bool);
    console.log(obj);