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


    const image = document.getElementById('dream-image');
    const video = document.getElementById('dream-video');
    const playButton = document.getElementById('toggle-button');
    
    playButton.addEventListener('click', () => {
        if (video.classList.contains('hidden')) {
        // Hide the image and show the video
        image.classList.add('hidden');
    video.classList.remove('hidden');
    video.play();
        }
    });