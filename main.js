// ===CYCLES==================================================================================================
// for(let i = 1; i <= 10000; i++) {
//     console.log("i love u " + i + " times")
// }
//=============================================
let password
let attemps = 0;
const maxAttemps = 3;

do {
    password = +prompt('Enter password:');
    attempts++;
    if (password === 1905) {
        alert("Right! Welcome")
    } else if (attemps < maxAttemps) {
        alert(`Wrong password. Attemps left: ${maxAttemps - attemps}`)
    }
} while (password !== 1905 && attemps < maxAttemps)

if (attemps === maxAttemps && password !== 6969) {
    alert("No attempts left, refresh the site.")
}
//=============================================


