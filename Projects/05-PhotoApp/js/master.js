$(document).ready(function() {
	$(".photo_carousel").carousel( {
		show: {
			"300px" : 1,
			"480px" : 1,
	        "740px" : 1,
	        "960px" : 1
    	},
    	controls: false,
    });

    $(".photo_carousel_two").carousel( {
		show: {
		"300px" : 8,
		"480px" : 8,
        "740px" : 8,
        "960px" : 8
    	}
    });

    $(".js-lightbox").lightbox( {
    	mobile: true,
    });
});

new WOW().init();



