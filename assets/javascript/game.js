$(document).ready(function() 
{
    //juice list
    //TODO fix enemys going to middle of screeen
    //TODO opacity
    //TODO change background based on winner
    //TODO increase attack button when in fight mode
    //TODO fix off by 1 bug


    var health = 0;
    $(".pic").each(function() 
    { 
        $(this).addClass("Character");
        health = number(200);
        $(this).children(".health").text(health);
        console.log(health);

    });


    $(".pic").click(function() 
    {
        $(this).removeClass("Character");
        $(this).off("click");
        $(this).addClass("picked");
        $(this).appendTo("#c-select");
        $(this).css("opacity", 1);
        $(this).css("background-color", "green");


        $(".Character").each(function()
        {
            $(this).css("opacity", 1);
            $(this).css("background-color", "red");
            $(this).removeClass("Character");
            $(this).off("click");
            $(this).addClass("enemy");

            $(".enemy").click(function()
            {
                $(this).appendTo("#defender");
                $(this).css("background-color", "purple");

                $(".enemy").each(function() {
                    $(this).off("click");    
                });
            });

            $(this).appendTo("#enemy-select");


        })
        
    });
    $("#attack").click(function()
    {
        if(($("#c-select").find(".picked").length != 0) && ($("#defender").find(".enemy").length !=0))
        {
            hero = $("#c-select").find(".picked");
            temp = hero.find(".health").text();
            hero.find(".health").text(Attack(temp));

            opposer = $("#defender").find(".enemy");
            temp2 = opposer.find(".health").text();
            opposer.find(".health").text(Attack(temp2));

        }
        if(parseInt(temp) <= 0)
        {
            //the laziest reset you've ever seen!
            location.reload(true);
        }
        if(parseInt(temp2) <= 0)
        {
            opposer.css("display", "none");
            opposer.removeClass("enemy");
            $(".enemy").click(function()
            {
                $(this).appendTo("#defender");
                $(this).css("background-color", "purple");
                opposer = $(this);
                $(".enemy").each(function() {
                    $(this).off("click");    
                });
            });
            if($(".enemy").length <=0)
            {
                 //the laziest reset you've ever seen!
                location.reload(true);
            }

        }
    })


    function number(val)
    {
        return Math.floor(Math.random() * val);
    }

    function Attack(str)
    {
        val = parseInt(str);
        val = val - number(40);
        return val;
    }

    function logger()
    {

    }
});


