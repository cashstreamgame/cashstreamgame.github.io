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
    var name = $('#name').val();
    var email = $('#email').val();
//    var subject = $('#subject').val();
    var message = $('#message').val();

    console.log(name);

    $('#supportForm').hide();
    $('#support').on('click', function(){
        $('#supportForm').slideToggle(1000);
    });




    $("#myForm").on('submit', function(){
        var name = $('#name').val();
        var email = $('#email').val();
//    var subject = $('#subject').val();
        var message = $('#message').val();


        console.log(name);
        emailjs.send("gmail","template_NHzH2D6l",{
            name: name,
            notes: "Check this out!",
            from_name: email,
            to_name: "etechgist@gmail.com",
            message_html: message,
            reply_to: email
        })
            .then(function(response) {
                console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                $('#supportForm').slideUp('fast');
                $("#myAlert").fadeIn(900);
                $('#name').val('');
                $('#email').val('');
                $('#message').val('');
            }, function(err) {
                console.log("FAILED. error=", err);

            });
        return false;
    });

	
});