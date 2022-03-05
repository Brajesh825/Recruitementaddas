//TOP NAVIGATION
function NavBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("myTopnav").style.boxShadow =
            "0px 6px 16px -6px rgba(1,1,1,0.5)";
        document.getElementById("roll_back").style.display = "flex";
    } else {
        document.getElementById("myTopnav").style.boxShadow =
            "0px 6px 16px -6px rgba(1,1,1,0)";
        document.getElementById("roll_back").style.display = "none";
    }
}