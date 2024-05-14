document.querySelector("button").addEventListener("click", () => {
    const ageInputed = document.querySelector("#date").value;

    let d1 = new Date(ageInputed).getDate() + 1;
    let m1 = new Date(ageInputed).getMonth() + 1;
    let y1 = new Date(ageInputed).getFullYear();

    console.log(d1, m1, y1, typeof d1);

    let diaAtual = `${new Date().getDate()}`.padStart(2, 0);

    let mesAtual = `${new Date().getMonth() + 1}`.padStart(2, 0);

    let anoAtual = new Date().getFullYear();

    let yearsOld = anoAtual - y1;
    let monthsOld;
    let daysOld;
    if (mesAtual >= m1) {
        monthsOld = mesAtual - m1;
    } else {
        yearsOld--;
        monthsOld = 12 + mesAtual - m1;
    }

    if (diaAtual >= d1) {
        daysOld = diaAtual - d1;
    } else {
        function getDaysInMonth(year, month) {
            return new Date(year, month, 0).getDate();
        }
        monthsOld--;
        daysOld = getDaysInMonth(y1, m1) + diaAtual - d1;
    }
    if (monthsOld < 0) {
        monthsOld = 11;
        yearsOld--;
    }

    document.querySelector(".resultado").innerHTML = `Você tem ${
        yearsOld == 1 ? `${yearsOld} ano` : `${yearsOld} anos`
    }, ${monthsOld == 1 ? `${monthsOld} mês` : `${monthsOld} meses`} e ${
        daysOld == 1 ? `${daysOld} dia` : `${daysOld} dias`
    }.`;
});

let today = new Date();
let formattedDate = today.toISOString().split("T")[0];

document.querySelector("input").max = formattedDate;
