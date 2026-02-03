const emptyMsg = document.querySelector('.input-fields');

const erroMsgDay = document.getElementById('error-day');
const erroMsgMonth = document.getElementById('error-month');
const erroMsgYear = document.getElementById('error-year');

//  -- FUNCTIONS --     
const validarIdade = () => { 
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;  
    
    // validarEmpty(day, month, year);

    if (validarInput(day, month, year)) {
        calcularIdade(day, month, year);
    }
};

// -- VALIDAR INPUT --
const validarInput = (day, month, year) => { 
    let isValid = true;
    const currentYear = new Date().getFullYear();

    // Any field is empty when the form is submitted
    if (day === "" || month === "" || year === "") {
        emptyMsg.classList.add('input-erro');
        return false;
    }

    // The day number is not between 1-31
    if (day < 1 || day > 31) {
        // emptyMsg.classList.add('input-erro');
        erroMsgDay.textContent = "Must be a valid day";
        return false;
    }    

    // The month number is not between 1-12
    if (month < 1 || month > 12) {
        // emptyMsg.classList.add('input-erro');
        erroMsgMonth.textContent = "Must be a valid month";
        return false;
    }

    // The date is in the future
    if (year > currentYear) {
        // emptyMsg.classList.add('input-erro');
        erroMsgYear.textContent = "Must be in the past";
        return false;
    }   

    if (!isValid) {
        emptyMsg.classList.add('input-erro');
    } else {
        emptyMsg.classList.remove('input-erro');
    }

    return isValid;
};

// -- CALCULAR IDADE --
const calcularIdade = (birthYear, birthMonth, birthDay) => { 
    const today = new Date();

    // A data do mês começa a conta da posição 0.
    const birthDate = new Date(birthDay, birthMonth - 1, birthYear);
    
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months --;
        const lastDayMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += lastDayMonth;
    };

    // Para não ficar negativo o mês
    if (months < 0 ) {
        years--;
        months += 12;
    };

    showAge(days, months, years);
};

// -- MODIFICAR O HTML/VISUAL --
const showAge = (days, months, years) => {     
    document.getElementById("days").textContent = days;
    document.getElementById("months").textContent = months;
    document.getElementById("years").textContent = years; 
};

// Como funciona o ano bissextos
// JS consegue identificar anos bissextos facilmente usando lógica matemática.
// Um ano é bissexto se:

    // 1. É divisível por 4 e não é divisível por 100, ou
    // 2. É divisível por 400.