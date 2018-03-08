/*
	Custom App Javascripts
	Created on 02/12/2018 by Corey O'Brien.
*/

$(document).ready(function () {

	// start script for toggling the size of a card.
	$.each($('.toggleFullscreen'), function (key, value) {
		$(value).click(function(e){
			$(value).parent().parent().parent().toggleClass('fullscreen');
			$('.card-task').parent().toggleClass('col-lg-12');
			$('body').toggleClass('no-scroll');
		});
	});
	// end script for toggling the size of a card.
	
});
	