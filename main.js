let students = ["Davlat", "Feruz", "Asad", "Danya"]

let nameToDelete = prompt("Введите имя для удаления: " + students.join(", "));

if (students.includes(nameToDelete)) {
    let index = students.indexOf(nameToDelete);
    students.splice(index, 1);
    alert("Обновленный список: " + students.join(", "));
} else {
    alert("Имя не найдено в списке.");
}