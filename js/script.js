// formula homem: TMB = (10 x Peso em kg) + (6.25 x Altura em cm) - (5 x Idade) + 5
// formula mulher:TMB = (10 x Peso em kg) + (6.25 x Altura em cm) - (5 x Idade) - 161

// let sexo = "he";
// let peso = 90;
// let altura = 191;
// let idade = 19;
// let acLevel = 1.55
// let result;


let sex = document.getElementsByName("sex")
let weight = document.getElementById("weight")
let height = document.getElementById("height")
let age = document.getElementById("age")
let ac = document.getElementById("al")
let activity = ac.options[ac.selectedIndex].value;


function sex_type() {

    for (let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            return sex[i].value
        }
    }
}




function tmb() {
    if (sex_type() === "he") {

        result = (10 * height.value) + (6.25 * weight.value) - (5 * age.value) + 5
        console.log(result * activity)
    } else if (sex_type() === "she") {

        result = (10 * height.value) + (6.25 * weight.value) - (5 * age.value) - 161
        console.log(result * activity)
    } else {
        console.log("erro")
    }
}


