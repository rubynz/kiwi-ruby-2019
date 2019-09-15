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


var hasScrolled = false;

    function scheduleUpdate() {
    
        var pastEls = document.getElementsByClassName("kr-schedule_item"),
        thisPos = 0.
        thisHash = '';

        if(!pastEls.length){
            return false;
        }

        for (i = 0; i < pastEls.length; i++) {

            if(pastEls[i].getAttribute("past") == null){
                return false;
            }

            var now = Date.now(),
            thisDate = Date.parse(pastEls[i].getAttribute("past"));

            if (now >= thisDate) {
                pastEls[i].classList.add("kr-schedule_item--past");
                thisPos = pastEls[i].offsetTop,
                thisHash = pastEls[i].id;
                console.log('thisHash: '+thisHash)
            } 

        }
        if (!hasScrolled) {
            setTimeout( function(){
                window.scrollTo(0, thisPos);
                if (thisHash) window.location.hash = '#'+thisHash;
                hasScrolled = true;
            }, 200);
        }

    }
    scheduleUpdate();
    setInterval(scheduleUpdate, 60*1000);