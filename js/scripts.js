$(document).ready(function(){
    $("#submit").click(function(event){
        var userName = $("#name").val();
        var userEmail = $("#email").val();
        var message = $("#message").val();
       
        if(userName == "" || userEmail == "" || message == ""){
            $("#errorMessage").html("**All fields are required**").fadeOut(4000);
        }
        else
        {
            $("#theName").html(userName);
            $("#hidden").show().fadeOut(5000);    
        }
        
        event.preventDefault(); 
    });
});