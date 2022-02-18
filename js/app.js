
function getTotalExpense() {
    // income input
    const incomeInputValue = parseFloat(document.getElementById("total-income-input").value);
    // expense section input
    const foodExpense = parseFloat(document.getElementById("food-expense-input").value);
    const rentExpense = parseFloat(document.getElementById("rent-expense-input").value);
    const clothesExpense = parseFloat(document.getElementById("clothes-expense-input").value);
    // total expense
    const totalExpense = document.getElementById("total-expense");
    const sumOfExpenses = foodExpense + rentExpense + clothesExpense;
    // totalExpense assigned
    totalExpense.innerText = sumOfExpenses;
    // input NaN error
    if (isNaN(incomeInputValue) || isNaN(foodExpense) || isNaN(rentExpense) || isNaN(clothesExpense)) {
        alert("Input should be a number!");
        return "Please submit a number!"
    }
    // input negative number error
    else if (incomeInputValue < 0 || foodExpense < 0 || rentExpense < 0 || clothesExpense < 0) {
        alert("Input should be a positive number!");
        return "Please submit a positive number!"
    }
    // less income error
    else if (incomeInputValue < sumOfExpenses) {
        alert("Income must be more than expenses!");
        return "Please incress your income!"

    } else {
        return incomeInputValue - sumOfExpenses;
    }
}
// saving function
function getSaving() {
    const saveInput = parseFloat(document.getElementById("save-amount-input").value);
    const savingOutput = document.getElementById("saving-amount");
    const remainingBalanceOutput = document.getElementById("remaining-balance");
    // balance from function
    const balanceOutput = getTotalExpense();
    // saving calculation
    const savingAmount = balanceOutput * saveInput / 100;
    // remain balance calculation
    const remainigBalance = balanceOutput - savingAmount;
    // // input NaN error
    if (isNaN(saveInput)) {
        alert("Saving input should be a number!");
    }
    // input negative number error
    else if (saveInput < 0) {
        alert("Saving input should be a positive number!");
    }
    // less income error
    else if (balanceOutput < savingAmount) {
        alert("Saving should be less than your balance!");

    } else {
        savingOutput.innerText = savingAmount;
        remainingBalanceOutput.innerText = remainigBalance;
    }
}
// submit button functioned
document.getElementById("calculate-button").addEventListener("click", function () {

    const balanceOutput = getTotalExpense();

    const balance = document.getElementById("balance");
    balance.innerText = balanceOutput;
});
// parcent section functioned
document.getElementById("save-button").addEventListener("click", function () {
    getSaving();
});
