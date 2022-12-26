
// formula homem: TMB = (10 x Peso em kg) + (6.25 x Altura em cm) - (5 x Idade) + 5
// formula mulher:TMB = (10 x Peso em kg) + (6.25 x Altura em cm) - (5 x Idade) - 161

//  tags html

const sex = document.getElementsByName("sex");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const age = document.getElementById("age");
const rTmb = document.getElementById("tmb")
const al = document.getElementById("all");
const iTdee = document.getElementById("tdee")
const obj = document.getElementById("objective")
const kcalDay = document.getElementById("kcal-day")
const protein = document.getElementById("protein")
const carbo = document.getElementById("carbo")
const fat = document.getElementById("fat")

// Value do nível de atividade física

function activity() {

    let activity = al.options[al.selectedIndex].value;
    return parseFloat(activity)
}

// value do objetivo do cliente

function objective() {

    let objective = obj.options[obj.selectedIndex].value;
    return objective
}


// função para identificar o sexo do cliente

function sex_type() {

    for (let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            return sex[i].value;
        }
    }
}

//formula da taxa metabólica basal

function tmb() {

    if (sex_type() === "he") {

        result = (10 * parseInt(height.value)) + (6.25 * parseInt(weight.value)) - (5 * parseInt(age.value)) + 5;
        return result

    } else if (sex_type() === "she") {

        result === (10 * parseInt(height.value)) + (6.25 * parseInt(weight.value)) - (5 * parseInt(age.value)) - 161;
        return result

    }
}

// Calorias de manutenção

function tdee() {

    result = tmb() * activity()
    return result
}

// cálculo dos macronutrientes por objetivos

function t() {

    w = weight.value

    if (objective() === "1") {

        let kcal_obj = tdee() * 0.8
        let vProtein = parseInt(weight.value) * 2
        let vCarbo = (kcal_obj - (vProtein * 4) - (parseInt(w * 9))) / 4
        let vFat = weight.value

        macros_obj = {
            kcal: kcal_obj,
            protein: vProtein,
            carbo: vCarbo,
            fat: parseInt(vFat),
        }

        return macros_obj

    } else if (objective() === "2") {

        let kcal_obj = tdee() * 0.7
        let vProtein = parseInt(weight.value) * 2
        let vCarbo = (kcal_obj - (vProtein * 4) - (parseInt(w * 9))) / 4
        let vFat = weight.value

        macros_obj = {
            kcal: kcal_obj,
            protein: vProtein,
            carbo: vCarbo,
            fat: parseInt(vFat)
        }

        return macros_obj

    } else if (objective() === "3") {

        let kcal_obj = tdee()
        let vProtein = parseInt(weight.value) * 2
        let vCarbo = (kcal_obj - (vProtein * 4) - (parseInt(w * 9))) / 4
        let vFat = weight.value

        macros_obj = {
            kcal: kcal_obj,
            protein: vProtein,
            carbo: vCarbo,
            fat: parseInt(vFat)
        }

        return macros_obj

    } else if (objective() === "4") {

        let kcal_obj = tdee() * 1.1
        let vProtein = parseInt(weight.value) * 2
        let vCarbo = (kcal_obj - (vProtein * 4) - (parseInt(w * 9))) / 4
        let vFat = weight.value

        macros_obj = {
            kcal: kcal_obj,
            protein: vProtein,
            carbo: vCarbo,
            fat: parseInt(vFat)
        }

        return macros_obj

    } else if (objective() === "5") {

        let kcal_obj = tdee() * 1.15
        let vProtein = parseInt(weight.value) * 2
        let vCarbo = (kcal_obj - vProtein) / 4
        let vFat = weight.value

        macros_obj = {
            kcal: kcal_obj,
            protein: vProtein,
            carbo: vCarbo,
            fat: parseInt(vFat)
        }

        return macros_obj
    }
}


// preenchendo dados no html

function preencher() {

    rTmb.innerText = Math.ceil(tmb()) + 'Kcal';
    iTdee.innerText = Math.ceil(tdee()) + 'Kcal';
    kcalDay.innerText = Math.ceil(t().kcal) + 'Kcal';
    protein.innerText = Math.ceil(t().protein) + 'Kcal';
    carbo.innerText = Math.ceil(t().carbo) + 'Kcal';
    fat.innerText = Math.ceil(t().fat) + 'Kcal';
    fat.innerText = Math.ceil(t().fat) + 'Kcal';

}
