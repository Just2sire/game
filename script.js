let input1 = document.getElementById('input1');

let input2 = document.getElementById('input2');

let bloc = document.getElementById('answer');

let button = document.getElementById('button');

let button2 = document.getElementById('button2');

let txt = document.getElementById('txt');

let invalid1 = document.getElementById('invalid1');
let invalid2 = document.getElementById('invalid2');
let invalid3 = document.getElementById('invalid3');
let invalid4 = document.getElementById('invalid4');

let tab = [];

for (let i = 0; i < 101; i++) {
    tab.push(i);    
}
console.log(tab);

function getValue() {
    let inputValue1 = parseInt(document.getElementById('input1').value);
    if (input1.value == "") {

        input1.classList.add('is-invalid');
        invalid1.classList.remove('d-none');
        button2.classList.add('d-none');
        setTimeout(() => {
            input1.classList.remove('is-invalid');
            invalid1.classList.add('d-none');
        }, 3000);

    } else if (tab.includes(inputValue1)) {

        input1.classList.add('d-none');
        txt.classList.remove('d-none');
        button.classList.add('d-none')
        button2.classList.remove('d-none');
        input2.classList.remove('d-none');
        let tentative = 0;
        button2.addEventListener('click', function () {

            tentative += 1;// tentative = tentative + 1
            let input2 = document.getElementById('input2');
            let inputValue2 = parseInt(document.getElementById('input2').value);

            if (inputValue2 == inputValue1) {
                input2.classList.add('is-valid');
                bloc.innerHTML = `Bravo✨🎉.Vous avez trouvé le nombre en ${tentative} tentatives.`
                // setTimeout(() => {
                //     location.reload();
                // }, 7000);
            } else if (inputValue2 < inputValue1) {
                bloc.innerHTML = `Désolé le nombre mystère est plus grand que ${inputValue2}.`
            } else if (inputValue2 > inputValue1) {
                bloc.innerHTML = `Désolé le nombre mystère est plus petit que ${inputValue2}`
            } else if (tab.includes(inputValue2) == false) {
                invalid4.classList.remove('d-none');
                setTimeout(() => {
                    invalid4.classList.add('d-none');
                }, 3000);
            } else if (inputValue2 == input2.value) {
                input2.classList.add('is-invalid');
                invalid2.classList.remove('d-none');
                setTimeout(() => {
                    input2.classList.remove('is-invalid');
                    invalid2.classList.add('d-none');
                }, 3000);
            }

        })

    } else if (typeof input1.value !== Number) {

        input1.classList.add('is-invalid');
        invalid2.classList.remove('d-none');
        button2.classList.add('d-none');
        setTimeout(() => {
            input1.classList.remove('is-invalid');
            invalid2.classList.add('d-none');
        }, 3000);

    }
}