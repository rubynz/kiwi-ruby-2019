var paraEls = document.getElementsByClassName("kr-paralax"),
    offset = 0;

    window.addEventListener('scroll', function (e) {

    offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if(!paraEls.length){
        return false;
    }

    for (i = 0; i < paraEls.length; i++) {
        if(paraEls[i].getAttribute("paralax") == null){
        return false;
        }
        paraEls[i].style.transform = "translate(0, "+parseInt(offset * -(paraEls[i].getAttribute("paralax")))+"px)";
    }

    }, false);