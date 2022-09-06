$(document).ready(function() {

    
    let count = 0;
    let is_continue_count;
    function countdown() {
        let count_interval = setInterval(start_count, 1000);

        function start_count() {
            count += 1;
            is_continue_count = true;

            if(count === 4){
                is_continue_count = false;
                clearInterval(count_interval);
            }

            if(count === 1) {
                $(".started").text("3");
            }
            else if(count === 2) {
                $(".started").text("2");
            }
            else if(count === 3)
            {
                $(".started").text("1");
            }
            else if (!is_continue_count) {
                $(".started").text("Go");
                setTimeout(()=>{
                    $(".started").css("opacity", "0")
                },200)        

                setTimeout(()=>{
                    $(".started").css("display", "none")
                },800)
            }

        }
    }
    countdown()


    setTimeout(() => {

        $(".cactus_png").css("animation" , "3s linear 0s infinite normal none running run_cacts")
    setInterval(() => {
        $(".character_png").attr("src", "imgs/ingame/character/dinosaur_running_right.png")
        setTimeout(() => {
        $(".character_png").attr("src", "imgs/ingame/character/dinosaur_running_left.png")
        }, 100);
    }, 200);

    
    $(document).on("keydown",document,function(e) {
        if(e.key === "w") {
            function Bounce() {
                $(".character_png").animate({
                    top: "-200px"
                }, "fast");
                setTimeout(function() {
                    $(".character_png").animate({
                    top: "0"
                   }, "fast")
                },200)
            }
            Bounce();
                }
                else if(e.key === "d") {
                    let chr_d = $(".character_png").offset();
                    if(chr_d.left !== 1700) {
                        $(".character_png").animate({"left": "+=100px"}, "fast");
                    }
                }
                else if(e.key === "a") {
                    let chr_a = $(".character_png").offset();
                    if(chr_a.left !== 0) {
                        $(".character_png").animate({"left": "-=100px"}, "fast");
                    }
                }
    });

let is_collusion ;

    setInterval(() => {
        
        let get_cacts_offset = $(".cactus_png").offset();
        let get_chr_offset = $(".character_png").offset();

        let different_offset_left = (get_cacts_offset.left - get_chr_offset.left);
        let different_offset_right = (get_cacts_offset.left - get_chr_offset.left);


        let jump;
        if(get_chr_offset.top < 400) {
                   jump = true;

        }
        if(!jump && different_offset_left < 30 && different_offset_right > -30) {
            is_collusion = true;
            
        }
    }, 1);

    let current_score = document.querySelector(".user_cscore");
    let score = 0;
    setInterval(() => {
        if(!is_collusion) {
        current_score.innerHTML = "Your Score: " + score++;
        }
        else {
            let parse_score = parseInt(score)-1;
            alert("The game is over! Your score is " + parse_score + ". Refresh to play again")
            current_score.innerHTML = "Please refresh  the page to record a new score";
        }
    }, 100);

    setTimeout(() => {
        $(".cactus_png").css("animation" , "2s linear 0s infinite normal none running run_cacts")
    }, 30000);

    setTimeout(() => {
        $(".cactus_png").css("animation" , "1s linear 0s infinite normal none running run_cacts")
    }, 60000);

    setTimeout(() => {
        $(".cactus_png").css("animation" , "0.5s linear 0s infinite normal none running run_cacts")
    }, 120000);

    setTimeout(() => {
        $(".cactus_png").css("animation" , "0.3s linear 0s infinite normal none running run_cacts")
    }, 180000);
    }, 4000);


});