// JavaScript Document
$('document').ready(function(e) {
    $('.investment').hide();
    $('.business').hide();
    $('.lifestyle').hide();
    $('#lifestyleButton').click(function(e){
        $('.investment').hide();
        $('.business').hide();
        $('.lifestyle').fadeIn(1000, "swing");
        });
    $('#investmentButton').click(function(e){
        $('.business').hide();
        $('.lifestyle').hide();
        $('.investment').fadeIn(1000, "swing");
    });
    $('#businessButton').click(function(e){
        $('.investment').hide();
        $('.lifestyle').hide();
       $('.business').fadeIn(1000, "swing");
    });
    $('.closeup').click(function(e){
        $('.investment').hide();
        $('.business').hide();
        $('.lifestyle').hide();
    });
    var feedback = '<div class="alert alert-success alert-dismissible fade show" role="alert">'+
        '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span>'+
        '</button>'+
        '<strong>Thank you!</strong> Your feedback has been recieved.</div>';
    var subscription = '<div class="alert alert-success alert-dismissible fade show" role="alert">'+
        '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span>'+
        '</button>'+
        '<strong>Congratulations!</strong>You have been added to our mailing list</div>';
    var errorMsg = '<div class="alert alert-danger alert-dismissible fade show" role="alert">'+
        '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span>'+
        '</button>'+
        '<strong>Sorry, </strong>something went wrong</div>';
    $("#myForm").on('submit', function(){
        if($('#email').val() !=='' && $('#message').val() !=='') {
            var email = $('#email').val();
            var message = $('#message').val();
            emailjs.send("gmail", "template_NHzH2D6l", {
                notes: "Check this out!",
                from_name: email,
                to_name: "etechgist@gmail.com",
                message_html: message
            })
                .then(function (response) {
                    console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                    $('#email').val('');
                    $('#message').val('');
                    $('#content').html(feedback);
                }, function (err) {
                    console.log("FAILED. error=", err);
                    $('#content').html(errorMsg);
                });
        }else{
            $('#content').html(errorMsg);
        }
        return false;
    });

    $("#submit").on('click', function(){
        console.log("working fine");
        if($('#emailList').val() !=='') {
            console.log("working");
            var email = $('#emailList').val();
            emailjs.send("gmail", "cash", {
                email: email,
                to_name: "etechgist@gmail.com"
            })
                .then(function (response) {
                    console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                    $('#emailList').val('');
                    $('#content').html(subscription);
                }, function (err) {
                    console.log("FAILED. error=", err);
                    $('#content').html(errorMsg);
                    console.log("ok");

                });
        }else{
            $('#content').html(errorMsg);
        }
        return false;
    });
});