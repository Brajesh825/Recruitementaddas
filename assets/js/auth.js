$(".options-02 a").click(function() {
    $("form").animate({
            height: "toggle",
            opacity: "toggle",
        },
        "slow"
    );
});

const params = new URLSearchParams(window.location.search);
if (params.has("register")) {
    $("form").animate({
            height: "toggle",
            opacity: "toggle",
        },
        "slow"
    );
}