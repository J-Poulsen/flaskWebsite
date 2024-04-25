
function insert() {
    $.ajax({
        url: 'function.php',
        type: 'POST',
        data: {
            first_name: $("#first_name").val(),
            last_name: $("#last_name").val(),
            email: $("#email").val(),
            action: "insert"
        },
        success: function(response) {
            // Process response
            if(response == 1) {
                alert("Data Added Successfully!");
            } else {
                alert("An error occurred");                }
        }
    });
}

// To prevent form submission
$("#contact_form").submit(function(event) {
    event.preventDefault();
    insert(); // Call insert function when form is submitted
});
