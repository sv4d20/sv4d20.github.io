window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/
    preloadInterpolationImages();

    $('#interpolation-slider').on('input', function(event) {
      setInterpolationImage(this.value);
    });
    setInterpolationImage(0);
    $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

    bulmaSlider.attach();

})


document.addEventListener('DOMContentLoaded', () => {
  const mainVideo = document.getElementById('main-video');
  const thumbnails = document.querySelectorAll('.thumbnail');

  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
          // Update the video source
          const videoSrc = thumbnail.getAttribute('data-video');
          mainVideo.querySelector('source').setAttribute('src', videoSrc);
          mainVideo.load(); // Reload the video
          mainVideo.play();

          // Highlight the selected thumbnail
          thumbnails.forEach(thumb => thumb.classList.remove('active'));
          thumbnail.classList.add('active');
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const mainVideo = document.getElementById('main-video-comparison');
  const thumbnails = document.querySelectorAll('.thumbnail-comparison');

  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
          // Update the video source
          const videoSrc = thumbnail.getAttribute('data-video');
          mainVideo.querySelector('source').setAttribute('src', videoSrc);
          mainVideo.load(); // Reload the video
          mainVideo.play();

          // Highlight the selected thumbnail
          thumbnails.forEach(thumb => thumb.classList.remove('active'));
          thumbnail.classList.add('active');
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const mainVideo = document.getElementById('main-video-comparison1');
  const thumbnails = document.querySelectorAll('.thumbnail-comparison1');

  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
          // Update the video source
          const videoSrc = thumbnail.getAttribute('data-video');
          mainVideo.querySelector('source').setAttribute('src', videoSrc);
          mainVideo.load(); // Reload the video
          mainVideo.play();

          // Highlight the selected thumbnail
          thumbnails.forEach(thumb => thumb.classList.remove('active'));
          thumbnail.classList.add('active');
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const mainVideo = document.getElementById('main-video-comparison2');
  const thumbnails = document.querySelectorAll('.thumbnail-comparison2');

  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
          // Update the video source
          const videoSrc = thumbnail.getAttribute('data-video');
          mainVideo.querySelector('source').setAttribute('src', videoSrc);
          mainVideo.load(); // Reload the video
          mainVideo.play();

          // Highlight the selected thumbnail
          thumbnails.forEach(thumb => thumb.classList.remove('active'));
          thumbnail.classList.add('active');
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const mainVideo = document.getElementById('main-video-comparison3');
  const thumbnails = document.querySelectorAll('.thumbnail-comparison3');

  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
          // Update the video source
          const videoSrc = thumbnail.getAttribute('data-video');
          mainVideo.querySelector('source').setAttribute('src', videoSrc);
          mainVideo.load(); // Reload the video
          mainVideo.play();

          // Highlight the selected thumbnail
          thumbnails.forEach(thumb => thumb.classList.remove('active'));
          thumbnail.classList.add('active');
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const mainVideo = document.getElementById('main-video-comparison4');
  const thumbnails = document.querySelectorAll('.thumbnail-comparison4');

  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
          // Update the video source
          const videoSrc = thumbnail.getAttribute('data-video');
          mainVideo.querySelector('source').setAttribute('src', videoSrc);
          mainVideo.load(); // Reload the video
          mainVideo.play();

          // Highlight the selected thumbnail
          thumbnails.forEach(thumb => thumb.classList.remove('active'));
          thumbnail.classList.add('active');
      });
  });
});