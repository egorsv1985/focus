$(document).ready(function () {
	$('.burger').click(function () {
		$('header').toggleClass('open')
		$('body').toggleClass('overflow-hidden')
		$('.burger').toggleClass('open')
		// $('.menu').toggleClass('hidden')
		

		return false
	})
})
