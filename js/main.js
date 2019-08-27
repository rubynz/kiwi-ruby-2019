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

var navbar = document.getElementById("navbar"),
    navOffset = navbar.offsetTop;

    window.addEventListener('scroll', function (e) {

        offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        
        if (window.pageYOffset  >= navOffset) {
            navbar.classList.add("stuck")
        } else {
            navbar.classList.remove("stuck");
        }

    }, false);

    window.addEventListener("resize", function(){
        navOffset = navbar.offsetTop;
    });
