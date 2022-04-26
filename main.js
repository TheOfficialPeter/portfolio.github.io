function goup()
{
    var scroll = document.getElementById("home").scrollTop;
    var black = document.getElementsByClassName("Black")[0];
    console.log(scroll);

    if (scroll > 10)
    {
        black.style.opacity = "1";
    }
    else
    {
        black.style.opacity = "0";
    }

    if (scroll > 700) 
    {
        var goupBtn = document.getElementsByClassName("goup")[0];
        goupBtn.style.opacity = 1;

    }
    else
    {
        var goupBtn = document.getElementsByClassName("goup")[0];
        goupBtn.style.opacity = 0;
    }
}