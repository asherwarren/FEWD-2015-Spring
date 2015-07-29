(function($){

	function init($target) {
		// guard against reinitialization
		if ( !$target.hasClass("highlighted") ) {

			//adding  a class. The "!"" means "doesn't"
			$target.addClass("highlighted").click(onClick)

		}
	}

	// event handler
	function onClick(event) {
			// Cache target element
			var $target = $(this);

			// This is saying what happens on the click. In CSS the .highlighted.class is defined. So we are just adding the .highlighted that makes it work.
			if ($target.hasClass("active")) {
				$target.removeClass("active");
			} else {
				$target.addClass("active");
			}
	}

	// register plugin with jQuery
	$.fn.highlight = function () {
			var $targets = $(this);

			// this is how you target specific spans. They comin as a numbered list so you can use it to map to that. eg. i is 0 but if xero is less than the number of the span a one is added (++) and so on and so on.
			for (var i = 0; i < $targets.length; i++) {
				init ( $targets.eq(i) );
			}

			// maintain chain-ability
			return $targets;
	};

})(jQuery);