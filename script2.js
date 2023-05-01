let count = 0;

function increment() {
    count++;
    document.getElementById("count").value = count;
    document.getElementById("count-display").textContent = count;
    updateCost();
}

function decrement() {
    if (count > 0) {
        count--;
        document.getElementById("count").value = count;
        document.getElementById("count-display").textContent = count;
        updateCost();
    }
}

function updateCost() {
    let costPerItem = 15.977;
    let totalCost = count * costPerItem;
    let fee = document.getElementById("fee").value;
    let totalWithFee = totalCost + parseFloat(fee);
    let estimatedTax = Math.round(totalWithFee * 10) / 100;
    let orderTotal = totalWithFee + estimatedTax;
    if (count == 0) {
        totalWithFee = 0;
        estimatedTax = 0;
        orderTotal = 0;
    }
    document.getElementById("total-cost").innerHTML = "$" + totalCost.toFixed(2);
    document.getElementById("fee-display").innerHTML = "$" + fee;
    document.getElementById("totalWithFee").innerHTML = "$" + totalWithFee.toFixed(2);
    document.getElementById("estimatedTax").innerHTML = "$" + estimatedTax.toFixed(2);
    document.getElementById("orderTotal").innerHTML = "$" + orderTotal.toFixed(2);
}