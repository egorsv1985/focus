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
