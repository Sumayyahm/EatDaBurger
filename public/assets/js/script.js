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
            location.reload();
        });
    });



$(".burger-btn").on("click", function(event) {
    event.preventDefault();
  
    $.ajax("/api/burgers", {
        type: "POST",
        data: {
            burger_name: $("#burger_name").val().trim()
        }
    }).then(
        function() {
        console.log("created new burger");
        location.reload();
    });
});


});