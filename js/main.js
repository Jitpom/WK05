$(document).ready(function(){ //wait until all the elements are loaded
    $("li").click(function(){
        $(this).hide(); //hide the list item I click
    });
    $("#menu-icon").click(function(){
        if ($("header nav").hasClass("active")){
            $("header nav").removeClass("active");
        }
        else{
            $("header nav").addClass("active");
        }        
    });
});
