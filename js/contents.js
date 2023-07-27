var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function openTab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-12.5rem";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwiMgCEN_YCLd9EXheABrfvr3vghKvD3EBZmQTz3oPQVEWAPmvUO6DoElQHYI_DTAT1/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Messege sent successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

$(document).ready(function () {
    var rows = {};

    $('.div-technologies div').each(function (index) {
        var rowOffset = this.offsetTop;
        if (!rows[rowOffset]) {
            rows[rowOffset] = [];
        }
        rows[rowOffset].push($(this));
    });

    for (var row in rows) {
        var maxHeight = 0;
        $(rows[row]).each(function () {
            $(this).css('height', 'auto'); // Reset the height to auto before finding the tallest element
            var height = $(this).outerHeight();
            if (height > maxHeight) {
                maxHeight = height;
            }
        });

        $(rows[row]).each(function () {
            $(this).css('height', maxHeight + 'px'); // Set the height to the tallest element's height for each element in the row
        });
    }
});