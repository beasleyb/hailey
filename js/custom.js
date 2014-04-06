// $(document).ready(function() {
//     $("#submit_btn").click(function() { 
//     	console.log("fired");
//         //get input field values
//         var user_name       = $('input[name=name]').val(); 
//         var user_email      = $('input[name=email]').val();
//         var user_message    = $('textarea[name=message]').val();
//         console.log('name: '+user_name+', email: '+user_email+', message: '+user_message)
        
//         //simple validation at client's end
//         var proceed = true;
//         if(user_name==""){ 
//             $('input[name=name]'.parent).addClass('has-error'); 
//             proceed = false;
//         }
//         if(user_email==""){ 
//             $('input[name=email]'.parent).addClass('has-error'); 
//             proceed = false;
//         }
//         if(user_message=="") {  
//             $('textarea[name=message]'.parent).addClass('has-error'); 
//             proceed = false;
//         }

//         //everything looks good! proceed...
//         if(proceed) 
//         {
//             //data to be sent to server
//             post_data = {'userName':user_name, 'userEmail':user_email, 'userMessage':user_message};
            
//             //Ajax post data to server
//             $.post('php/contact_me.php', post_data, function(response){  
                
//                 //load json data from server and output message     
//                 if(response.type == 'error')
//                 {
//                     output = '<div class="alert alert-success">'+response.text+'</div>';
//                 }else{
//                     output = '<div class="alert alert-danger">'+response.text+'</div>';
                    
//                     //reset values in all input fields
//                     $('#contact_form input').val(''); 
//                     $('#contact_form textarea').val(''); 
//                 }
                
//                 $("#result").hide().html(output).slideDown();
//             }, 'json');
            
//         }
//     });
    
//     // //reset previously set border colors and hide all message on .keyup()
//     // $("#contact_form input, #contact_form textarea").keyup(function() { 
//     //     $("#contact_form input, #contact_form textarea").css('border-color',''); 
//     //     $("#result").slideUp();
//     // });
    
// });

$(function() {
    $('.page-scroll a').on('click', function(e) {
    	event.preventDefault();
        var $anchor = $(this);
        var hash = this.hash
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 190
        }, 1500, function() {
        	window.location.hash = hash;
        });
    });
});