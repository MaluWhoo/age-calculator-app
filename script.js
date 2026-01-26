
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

const calculateBtn = document.getElementById("calculate-btn");

calculateBtn.addEventListener('click', () => {

    // Pegar a data atual baseada no sistema
    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();



    let currentDay = new Date().getDate();



    
    // Calcular a idade (ano, mes e dia)
    let days = currentDay - parseInt(day.value);
    let months = currentMonth - parseInt(month.value);
    let years = currentYear - parseInt(year.value);
    

    // Validação dos inputs -> verificar se os valores são válidos
    if (days < 1 || days > 31) {
        currentMonth--;
        days += 30; // Ajuste para dias do mês anterior
        showAge(days);
    } 

    if (months < 1 || months > 12) {
        currentYear--;
        months += 12; // Ajuste para meses do ano anterior
    }

    if (years < 1 || years > currentYear) {

    }

    //Exibir a idade 
    // Ele não pode ixibir numeros negativos

     

    
})


// Função para exibir a idade na tela
function showAge(years, months, days) {
    const dayDispaly = document.getElementById("days");
    const monthDispaly = document.getElementById("months");
    const ageDispaly = document.getElementById("years");

    ageDispaly.textContent = years;
    monthDispaly.textContent = months;
    dayDispaly.textContent = days;
}