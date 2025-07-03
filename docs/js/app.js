document.addEventListener('DOMContentLoaded', function () {
	// Бургер-меню
	const burger = document.getElementById('burger')
	const mobileMenu = document.getElementById('mobileMenu')

	burger?.addEventListener('click', function () {
		burger.classList.toggle('is-active')
		mobileMenu.classList.toggle('is-active')
	})

	const navLinks = mobileMenu?.querySelectorAll('.nav__link')
	navLinks?.forEach(link => {
		link.addEventListener('click', () => {
			burger.classList.remove('is-active')
			mobileMenu.classList.remove('is-active')
		})
	})

	// Кейсы
	const cases = document.querySelectorAll('[data-case]')
	cases.forEach(el => {
		el.addEventListener('mouseenter', () => {
			cases.forEach(c => c.classList.remove('case--active'))
			el.classList.add('case--active')
		})
	})

	// GSAP pin + scroll
	gsap.registerPlugin(ScrollTrigger)

	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: '.integrator',
			start: 'top top',
			end: '+=2000',
			pin: true,
			scrub: 1,
			markers: false,
		},
	})

	// Анимация input-группы
	tl.from('.integrator__group--input .integrator__title', {
		y: 60,
		opacity: 0,
		duration: 1,
	})
	
	tl.from(
		'.integrator__group--input .integrator__card',
		{
			y: 60,
			opacity: 0,
			stagger: 0.2,
			duration: 1,
		},
		'-=0.8'
	)

	tl.to('.integrator__group--input', {
		opacity: 0,
		duration: 0.6,
	})

	// Обязательно показываем output-группу
	tl.to(
		'.integrator__group--output',
		{
			opacity: 1,
			duration: 0,
		},
		'-=0.6'
	)

	tl.from('.integrator__group--output .integrator__title', {
		y: 60,
		opacity: 0,
		duration: 1,
	})

	tl.from(
		'.integrator__group--output .integrator__card',
		{
			y: 60,
			opacity: 0,
			stagger: 0.2,
			duration: 1,
		},
		'-=0.8'
	)
	
})

// $(window).scroll(function (event) {
// 	var top = $(window).scrollTop() // Получаем текущую позицию прокрутки
// 	if (top > 0) {
// 		// Проверяем, если прокрутка больше 0
// 		$('.header').addClass('fixed').removeClass('absolute mt-2')
// 	} else {
// 		$('.header').removeClass('fixed').addClass('absolute mt-2')
// 	}
// })

$(document).ready(function () {
	$('.burger').click(function () {
		$('header').toggleClass('open')
		$('body').toggleClass('overflow-hidden')
		$('.burger').toggleClass('open')
		// $('.menu').toggleClass('hidden')
		

		return false
	})
})

$(document).ready(function () {
	// Проверяем поддержку формата WebP
	function supportsWebP() {
		var elem = document.createElement('canvas')

		if (!!(elem.getContext && elem.getContext('2d'))) {
			// Was able or not to get WebP representation
			return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0
		}

		// Very old browser like IE 8, canvas not supported
		return false
	}

	// Проверяем поддержку формата AVIF
	function supportsAvif() {
		var elem = document.createElement('canvas')

		if (!!(elem.getContext && elem.getContext('2d'))) {
			// Was able or not to get AVIF representation
			return elem.toDataURL('image/avif').indexOf('data:image/avif') == 0
		}

		// Very old browser like IE 8, canvas not supported
		return false
	}

	// Добавляем классы в зависимости от поддержки форматов
	if (supportsWebP()) {
		$('body').addClass('webp')
	}

	if (supportsAvif()) {
		$('body').addClass('avif')
	}
})
