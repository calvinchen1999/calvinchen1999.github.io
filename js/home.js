
	// slide show
    var imgArr = ['./images/slider.jpg', './images/slider1.jpg'];
    var imgSlider = document.getElementById('imgSlider');
    var i = 0;
    var timer = setInterval(function() {
        i++;
        if (i > 1) {
            i = 0;
        }
        imgSlider.src = imgArr[i];
    }, 5000);
