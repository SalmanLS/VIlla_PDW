/*!
* Start Bootstrap - Small Business v5.0.6 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function book() {
    var checkin = document.getElementById("checkin").value
    var checkout = document.getElementById("checkout").value
    var villa = document.getElementById("villa").value
    var guest = document.getElementById("guest").value


    alert(
        "BOOKED!, here is your detail :" +
        "\nCheck-in: " + checkin +
        "\nCheck-out : " + checkout +
        "\nVilla type : " + villa + 
        "\nNumber of guest : " + guest 
    )
}

function contact(){
    alert("Thank you! "+
    "\nWe will reply to you as soon as possible.")
}

function harga1(){
    alert(
        "Mawar Villa Price: Rp. 800.000/Night"
    )
}
function harga2(){
    alert(
        "Anggrek Villa Price: Rp. 1.600.000/Night"
    )
}
function harga3(){
    alert(
        "Raflesia Villa Price: Rp. 2.600.000/Night"
    )
}