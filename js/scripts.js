$(document).ready(function(){
    $(".design").click(function(){
        $(".designInfo").slideToggle();
    });
    $(".dev").click(function(){
        $(".devInfo").slideToggle();
    });
    $(".product").click(function(){
        $(".managementInfo").slideToggle();
    });
    $("#submit").click(function(event){
        var userName = $("#name").val();
        var userEmail = $("#email").val();
        var message = $("#message").val();
       
        if(userName == "" || userEmail == "" || message == ""){
            $("#errorMessage").html("**All fields are required**").fadeOut(5000);
        }
        else
        {   
            $("#theName").html(userName);
            $("#hidden").show().fadeOut(5000);    
        }
        
        event.preventDefault(); 
    });
});