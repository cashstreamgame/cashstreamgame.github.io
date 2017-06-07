// JavaScript Document
$('document').ready(function(e) {
	$('.btn-lg').mouseenter(function(){
		$(this).fadeTo(100,0.4).fadeTo(1000,1);

		});
    $('.lux').hide();
    $('.biz').hide();

    $('#lm-lux').click(function(e){
        $('.lux').fadeIn(1000, "swing");
        });

    $('#lm-biz').click(function(e){
        $('.biz').fadeIn(1000, "swing");
    });

    $('.hidelux').click(function(e){
       $('.lux').slideUp();
    });

    $('.hidebiz').click(function(e){
        $('.biz').slideUp();
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