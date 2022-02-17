
function getTotalExpense() {
    const foodExpense = parseFloat(document.getElementById("food-expense-input").value);
    const rentExpense = parseFloat(document.getElementById("rent-expense-input").value);
    const clothesExpense = parseFloat(document.getElementById("clothes-expense-input").value);
    return foodExpense + rentExpense + clothesExpense;
}

const calculateBtn = document.getElementById("calculate-button");
calculateBtn.addEventListener("click", function () {
    const totalExpense = document.getElementById("total-expense");
    const sumOfExpenses = getTotalExpense();
    totalExpense.innerText = sumOfExpenses;

    const income = parseFloat(document.getElementById("total-income-input").value);
    const balance = document.getElementById("balance");
});
