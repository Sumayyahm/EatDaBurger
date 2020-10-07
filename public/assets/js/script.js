$(function () {
    $(".devour-burger").on("click", function(event) {
        var id = $(this).data("id");

        var newDevouredState = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(function() {
            console.log("changed devoured to true");
            $(".devour-burger").hide();
            location.reload();
        });
    });



$(".add-burger").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
        burger_name = $("#burger").val().trim()
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(function() {
        console.log("created new burger");
        location.reload();
    });
});

});