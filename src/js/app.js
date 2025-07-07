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
