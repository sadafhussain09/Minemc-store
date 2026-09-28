let selectedRank = "";
let selectedPrice = 0;


// OPEN PURCHASE WINDOW

function openPurchase(rank, price) {

    selectedRank = rank;
    selectedPrice = price;

    document.getElementById("selectedRank").textContent = rank;

    document.getElementById("paymentAmount").textContent = price;

    document.getElementById("username").value = "";

    document
        .getElementById("purchaseModal")
        .classList.add("active");
}


// CLOSE PURCHASE WINDOW

function closePurchase() {

    document
        .getElementById("purchaseModal")
        .classList.remove("active");
}


// COPY UPI ID

function copyUPI() {

    const upi = "6207867258@fam";

    if (navigator.clipboard) {

        navigator.clipboard.writeText(upi)
            .then(function() {

                alert("UPI ID copied!");

            });

    } else {

        alert("UPI ID: " + upi);

    }
}


// PAY NOW

function payNow() {

    const username =
        document
            .getElementById("username")
            .value
            .trim();


    if (username === "") {

        alert(
            "Please enter your Minecraft username."
        );

        return;

    }


    /*
       UPI PAYMENT LINK

       This opens a UPI app with:
       - UPI ID
       - MineMC
       - Amount
       - Username + Rank
    */

    const upiURL =
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


    // Open UPI application

    window.location.href = upiURL;


    /*
       IMPORTANT:

       Website cannot know whether UPI payment
       was actually completed.

       This popup is only a verification notice.
    */

    setTimeout(function() {

        closePurchase();

        document
            .getElementById("verificationModal")
            .classList.add("active");

    }, 3000);

}


// CLOSE VERIFICATION

function closeVerification() {

    document
        .getElementById("verificationModal")
        .classList.remove("active");

}


// CLICK OUTSIDE MODAL

window.addEventListener("click", function(event) {

    const purchase =
        document.getElementById("purchaseModal");

    const verification =
        document.getElementById("verificationModal");


    if (event.target === purchase) {

        closePurchase();

    }


    if (event.target === verification) {

        closeVerification();

    }

});
