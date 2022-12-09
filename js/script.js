
// formula homem: TMB = (10 x Peso em kg) + (6.25 x Altura em cm) - (5 x Idade) + 5
// formula mulher:TMB = (10 x Peso em kg) + (6.25 x Altura em cm) - (5 x Idade) - 161

//  tags html

let sex = document.getElementsByName("sex")
let weight = document.getElementById("weight")
let height = document.getElementById("height")
let age = document.getElementById("age")
let al = document.getElementById("all")
let final = document.getElementById("final")


// Value dos níveis de atividade

let activity = al.options[al.selectedIndex].value;


// função para identificar o sexo do cliente

function sex_type() {

    for (let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            return sex[i].value
        }
    }
}

// função da Taxa metabólica basal

function tmb() {

    if (sex_type() === "he") {

        result = (10 * parseInt(height.value)) + (6.25 * parseInt(weight.value)) - (5 * parseInt(age.value)) + 5
        rtn = Math.ceil(result * parseFloat(activity))

        return "<p class='result'> Seu imc é igual a: " + rtn + "</p>"

    } else if (sex_type() === "she") {

        result = (10 * parseInt(height.value)) + (6.25 * parseInt(weight.value)) - (5 * parseInt(age.value)) - 161
        rtn = Math.ceil(result * parseFloat(activity))

        return "<p class='result'>Olá Mulher. Seu imc é igual a: " + rtn + "</p>"

    } else {

        return "<p class='result'>Preencha todos os dados</p>"
    }
}

// Preenchimento da tag html

function mudarHtml() {

    final.innerHTML = tmb()
}