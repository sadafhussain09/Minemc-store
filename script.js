const UPI_ID = "6207867258@fam";

let selectedRank = "";
let selectedPrice = 0;

function buyRank(rank, price) {

    selectedRank = rank;
    selectedPrice = price;

    document.getElementById("rankName").innerText =
        "Buy " + rank;

    document.getElementById("rankPrice").innerText =
        "Total: ₹" + price;

    document.getElementById("popup").style.display =
        "flex";
}

function closePopup() {

    document.getElementById("popup").style.display =
        "none";
}

function payNow() {

    const username =
        document.getElementById("username").value.trim();

    if (username === "") {

        alert("Please enter your Minecraft username.");

        return;
    }

    const note =
        encodeURIComponent(
            "MineMC " +
            selectedRank +
            " - " +
            username
        );

    const upi =
        encodeURIComponent(UPI_ID);

    window.location.href =
        "upi://pay?pa=" +
        upi +
        "&pn=MineMC" +
        "&am=" +
        selectedPrice +
        "&cu=INR" +
        "&tn=" +
        note;
}

window.onclick = function(event) {

    if (event.target.id === "popup") {

        closePopup();
    }
};
