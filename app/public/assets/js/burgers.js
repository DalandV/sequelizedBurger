$(function() {
  // Add a new burger to the database
  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
      burger_name: $("#burger-input")
        .val()
        .trim()
    };
    // Send the POST request.
    $.ajax("/api/burger/add", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  // Update burger in the database
  $(".devour-btn").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    console.log(id);
    // Send the PUT request.
    $.ajax({
      method: "PUT",
      url: `/api/burger/update/${id}`
    }).then(function() {
      console.log("Burger devoured");
      location.reload();
    });
  });
});
