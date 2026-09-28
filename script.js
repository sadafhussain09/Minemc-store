let selectedRank = "";
let selectedPrice = 0;


// OPEN PURCHASE POPUP

function openPurchase(rank, price) {

    selectedRank = rank;
    selectedPrice = price;

    document.getElementById("selectedRank").textContent = rank;

    document.getElementById("paymentAmount").textContent = price;

    document.getElementById("username").value = "";

    document.getElementById("purchasePopup")
        .classList.add("active");
}


// CLOSE PURCHASE POPUP

function closePurchase() {

    document.getElementById("purchasePopup")
        .classList.remove("active");
}


// COPY UPI

function copyUPI() {

    const upi = "6207867258@fam";

    navigator.clipboard.writeText(upi)
        .then(() => {

            alert("UPI ID copied!");

        })
        .catch(() => {

            alert("UPI ID: " + upi);

        });
}


// PAY NOW

function paymentDone() {

    const username =
        document.getElementById("username")
            .value.trim();


    // Username check

    if (username === "") {

        alert(
            "Please enter your Minecraft username."
        );

        return;
    }


    // UPI PAYMENT LINK

    const upiLink =
        "upi://pay" +
        "?pa=6207867258@fam" +
        "&pn=MineMC" +
        "&am=" + selectedPrice +
        "&cu=INR" +
        "&tn=" +
        encodeURIComponent(
            "MineMC " +
            selectedRank +
            " - " +
            username
        );


    // Open UPI app

    window.location.href = upiLink;


    /*
       After opening the UPI app,
       show verification popup.

       IMPORTANT:
       This does NOT automatically verify
       whether the payment was successful.
    */

    setTimeout(function () {

        closePurchase();

        document.getElementById("successPopup")
            .classList.add("active");

    }, 2500);

}


// CLOSE SUCCESS POPUP

function closeSuccess() {

    document.getElementById("successPopup")
        .classList.remove("active");

}


// CLOSE POPUP WHEN CLICKING OUTSIDE

window.addEventListener("click", function(event) {

    const purchase =
        document.getElementById("purchasePopup");

    const success =
        document.getElementById("successPopup");


    if (event.target === purchase) {

        closePurchase();

    }

    if (event.target === success) {

        closeSuccess();

    }

});
