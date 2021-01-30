function getInputValues(id) {
    let ticketCount;
    const ticketInput = document.getElementById(id + '-count');
    if (ticketInput.value == "") {
        ticketCount = 0;
    } else {
        ticketCount = parseInt(ticketInput.value);
    }
    return ticketCount;
}

function TicketChange(id, isIncrease) {

    const ticketCount = getInputValues(id);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    document.getElementById(id + '-count').value = ticketNewCount;
    TotalCost();
}

function TotalCost() {
    const firstClassCount = getInputValues('first-class');
    const economyCount = getInputValues('economy');
    const totalPrice = firstClassCount * 150 + economyCount * 100;
    document.getElementById('totalAmount').innerText = totalPrice;
    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('taxAmount').innerText = tax;
    const grndTotal = totalPrice + tax;
    document.getElementById('grandTotal').innerText = grndTotal;
}


function confirmBooking(){
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var departureDate = document.getElementById('departure').value;
    var returnDate = document.getElementById('return').value;
    var cost = document.getElementById('grandTotal').innerText;
    if (from == null || from == "" && to == null || to == "" && departureDate == null || departureDate == "" && returnDate == null || returnDate == "" || cost <= 0) {
        alert("Please Fill All Required Field");
    } else {
        document.getElementById("buy-ticket").style.display = "none";
        document.getElementById("confirmation").style.display = "block";
        document.getElementById('confirmation-from').innerText = from;
        document.getElementById('confirmation-to').innerText = to;
        document.getElementById('confirmation-departure').innerText = departureDate;
        document.getElementById('confirmation-return').innerText = returnDate;
        document.getElementById('confirmation-cost').innerText = cost;
    }
}