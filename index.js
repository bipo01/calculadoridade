document.querySelector("button").addEventListener("click", () => {
    const ageInputed = document.querySelector("#date").value;

    let d1 = new Date(ageInputed).getDate() + 1;
    let m1 = new Date(ageInputed).getMonth() + 1;
    let y1 = new Date(ageInputed).getFullYear();

    console.log(d1, m1, y1, typeof d1);

    let diaAtual = new Date().getDate();

    let mesAtual = new Date().getMonth() + 1;

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

    document.querySelector(
        ".resultado"
    ).innerHTML = `You are ${yearsOld} years old, ${monthsOld} months and ${daysOld} days.`;
});
