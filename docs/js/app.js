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

	// Проверка на поддержку hover
	const hasHoverSupport = window.matchMedia(
		'(hover: hover) and (pointer: fine)'
	).matches

	if (hasHoverSupport) {
		// Работает только на десктопе
		cases.forEach(el => {
			el.addEventListener('mouseenter', () => {
				cases.forEach(c => c.classList.remove('case--active'))
				el.classList.add('case--active')
			})
		})
	} else {
		// На мобилках: все раскрыты
		cases.forEach(el => {
			el.classList.add('case--active')
		})
	}


	// GSAP pin + scroll
	gsap.registerPlugin(ScrollTrigger)

	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: '.integrator',
			start: 'top top',
			end: '+=1500',
			pin: true,
			scrub: 1,
			markers: false,
		},
	})

	// 1. Появление карточек (без задержек, с лёгким "выплыванием")
	tl.from(
		'.card__inner',
		{
			y: 80,
			opacity: 0,
			duration: 1,
			ease: 'power3.out',
		},
		0
	)

	// 2. Появление первого заголовка
	tl.fromTo(
		'.title--1',
		{
			y: 40,
			opacity: 0,
		},
		{
			y: 0,
			opacity: 1,
			duration: 0.8,
			ease: 'power2.out',
		},
		0.2
	)

	// 3. Переворот карточек
	tl.to(
		'.card__inner',
		{
			rotateY: 180,
			duration: 1,
			ease: 'power2.inOut',
		},
		0.8
	)

	// 4. Уход первого заголовка
	tl.to(
		'.title--1',
		{
			y: -40,
			opacity: 0,
			duration: 0.6,
			ease: 'power1.in',
		},
		1.0
	)

	// 5. Появление второго заголовка
	tl.fromTo(
		'.title--2',
		{
			y: 40,
			opacity: 0,
		},
		{
			y: 0,
			opacity: 1,
			duration: 0.6,
			ease: 'power2.out',
		},
		1.2
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
