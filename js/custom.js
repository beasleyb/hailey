$(function() {
    $('.page-scroll a').on('click', function(e) {
    	e.preventDefault();
        var $anchor = $(this);
        var hash = this.hash
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 110
        }, 1500, function() {
        	window.location.hash = hash;
        });
    });
});

$("#contact-form").on('submit', function(e) {
    e.preventDefault();
    var emailData = {
        name: $("#name").val(),
        email: $("#email").val(),
        message: $("#message").val()
    };

    function isValidEmail(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
    };
    if (isValidEmail(emailData['email']) && emailData['name'].length > 1 && emailData['message'].length > 50) {
       $.ajax({
        type: "POST",
        url: "php/mailer.php",
        data: emailData,
        success: function() {
            $("#contact-form")[0].reset();
            $("#success").fadeIn(100);
        },
        error: function(errorThrown) {
            $("#ajax-error").fadeIn(100);
            console.log(errorThrown);
        }
    }); 
    }
    else {
        $("#error").fadeIn(100);
    }
});

$(".close").on('click', function(e) {
    $(this).parent().fadeOut(100);
});