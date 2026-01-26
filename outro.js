
const inputDay = document.querySelector('#day');
const inputMonth = document.querySelector('#month');
const inputYear = document.querySelector('#year');

const erro = document.querySelector('.required-field');


const calculateBtn = document.getElementById("calculate-btn");

calculateBtn.addEventListener('click', () => {

    let day = Number(document.getElementById("day").value);
    let month = Number(document.getElementById("month").value);
    let year = Number(document.getElementById("year").value);

    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth() + 1;
    let currentDay = new Date().getDate();

    if (day < 1 || day > 31) {
        validar()
        return;
    }

    if (month === 4 && day > 30) {
        alert('Dia invalido');
        return;
    }
    
    if (month < 1 || month > 12) {
        alert('MES INVALIDO');
        return;
    } 

    if (year < 1 || year > currentYear) {
        alert('ANO INVALIDO');
        return;
    }

    // if (month > currentMonth) {
    //     years--;
    // } else if (months === currentMonth) {
    //     // Se o mês for igual ao mês do sistemas, vai ser ncessário verificar o dia
    //     if (day > currentDay) {
    //         years--;
    //     }
    // }

    // O cálculo da idade real
    let years = currentYear - year;
    let months = currentMonth - month;
    let days = currentDay - day;

    // Para não ficar negativado
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }
    
    showAge(days, months, years);

});

    // OBRSERVAÇÕES: 
    // Se o mes for menor do que o atual, subtrai 1 ano do total de anos
    // Se o dia for menor do que o atual, subtrai 1 mes do total de meses

    // Janeiro é posição 0 na função getMonth()


function showAge(days, months, years) {

    const dayDispaly = document.getElementById("days");
    const monthDispaly = document.getElementById("months");
    const ageDispaly = document.getElementById("years");

    ageDispaly.textContent = years;
    monthDispaly.textContent = months;
    dayDispaly.textContent = days;

}

function validar() {
    if (inputDay, inputMonth, inputYear.value === "") {
        erro.style.display = "block";
    } else {
        erro.style.display = "none"
    }
} 