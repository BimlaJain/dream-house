// counter js 
var counted = 0;
$(window).scroll(function () {
    var oTop = $("#counter").offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $(".count").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-count");
            $({
                countNum: $this.text(),
            }).animate(
                {
                    countNum: countTo,
                },
                {
                    duration: 2000,
                    easing: "swing",
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    },
                }
            );
        });
        counted = 1;
    }
});


document.getElementById('toggle-button').addEventListener('click', function () {
    var image = document.getElementById('dream-image');
    var video = document.getElementById('dream-video');

    if (video.classList.contains('hidden')) {     
        image.classList.add('hidden');
        video.classList.remove('hidden');
        video.play();
    } else {
        video.classList.add('hidden');
        image.classList.remove('hidden');
        video.pause(); 
        video.currentTime = 0;
    }
});

