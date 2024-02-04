
function calculateAge() {
    //store the value of my current age
    const myAge = parseInt(document.getElementById("myAge").value);

    //store the value of 2
    let earlyYears = 2;
    earlyYears *= 10.5;

    let myName = document.getElementById("myName").value.toLowerCase();

    //Subtract 2 from age
    laterYears = myAge - 2;

    //calc dog years
    laterYears *= 4;

    //add years
    let myAgeInDogYears = earlyYears + laterYears;

    document.getElementById("answer").textContent = "My name is " + myName.toString() + ". I am " + myAgeInDogYears.toString() + " years old in dog years."
}

document.getElementById("dogYearsButton").addEventListener("click", function(event) {
    calculateAge();
})


document.getElementById("myName").value = "zachary";
document.getElementById("myAge").value = 21;
calculateAge()
