
// Counter JS
let counted = false;
$(window).scroll(function () {
    const oTop = $("#counter").offset().top - window.innerHeight;
    if (!counted && $(window).scrollTop() > oTop) {
        $(".count").each(function () {
            const $this = $(this);
            const countTo = $this.attr("data-count");
            $({ countNum: $this.text() }).animate(
                { countNum: countTo },
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
        counted = true;
    }
});

// Video JS
document.getElementById('toggle-button').addEventListener('click', function () {
    const image = document.getElementById('dream-image');
    const video = document.getElementById('dream-video');

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
