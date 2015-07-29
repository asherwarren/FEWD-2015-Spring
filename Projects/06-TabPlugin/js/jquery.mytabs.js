(function($) {

	function init($target) {

		//guard against reinitialization
		if ( ! $target.hasClass("mytabs")) {
			$target.addClass("mytabs").on("click", ".tab-nav .tab", onClick);
			
		}

	}

	// on click handler
	function onClick(event) {
		var $parent = $(event.delegateTarget),
			$target = $(this),
			$tabHandles = $parent.find(".tab-nav .tab"),
			$tabContent = $parent.find(".tab-content .tab"),
			index = $tabHandles.index( $target );

			$tabHandles.removeClass("active").eq(index).addClass("active");
			$tabContent.removeClass("active").eq(index).addClass("active");


	}

	// register plugin with jQuery
	$.fn.myTabs = function() {

		var $targets = $(this);

		//loop through all targets
		for (var i = 0; i < $targets.length; i++) {
			init( $targets.eq(i) );
		}

		//maintain chain-ability
		return $targets;

	};

})(jQuery);