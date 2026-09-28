let selectedRank = "";
let selectedPrice = 0;

function buyRank(rank, price) {

    selectedRank = rank;
    selectedPrice = price;

    document.getElementById("rankName").innerText =
        "Buy " + rank;

    document.getElementById("rankPrice").innerText =
        "Total Amount: ₹" + price;

    document.getElementById("username").value = "";

    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function paymentDone() {

    const username =
        document.getElementById("username").value.trim();

    if (username === "") {

        alert("Please enter your Minecraft username.");

        return;
    }

    closePopup();

    document.getElementById("successPopup").style.display = "flex";
}

function closeSuccess() {

    document.getElementById("successPopup").style.display =
        "none";
}

window.onclick = function(event) {

    if (event.target.id === "popup") {
        closePopup();
    }

    if (event.target.id === "successPopup") {
        closeSuccess();
    }
};
