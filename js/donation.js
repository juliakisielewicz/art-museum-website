$(document).ready(function(){

    $('#other, .hideOther').prop('checked', false); 
    $("#enterAmount").val("0"); 

    $("#other").click(function(){
        $("#otherContainer").animate({height: '90px'});
        $("#selectContainer").animate({transform: 'translation(0px, 90px)'});
        $("#otherLabel").show("slow");
        $("#enterAmount").show("slow");

    });

    $(".hideOther").click(function(){
        $("#otherLabel").hide("slow");
        $("#enterAmount").hide("slow");
        $("#enterAmount").val("0");
        $("#total").text("£0.00");
        $("#otherContainer").animate({height: '0px'});
        $("#selectContainer").animate({transform: 'translation(0px, -90px)'});
    });

    $('#formAmount').change(function() {

        if ($('input[name=amount]:checked', '#formAmount').val() == "0") {
            let amount = $("#enterAmount").val();
            $("#total").text("£" + amount + ".00");
        }
        else {
            let amount = $('input[name=amount]:checked', '#formAmount').val();
            $("#total").text("£" + amount + ".00");
        }
     });

    $(".button").click(function(){
        $("#done").text("Thank you for your donation!");

    });
});
