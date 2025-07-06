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

	// Появление заголовка
	tl.from('.integrator__title', {
		y: 80,
		opacity: 0,
		duration: 1,
	})

	// Появление карточек
	tl.from(
		'.card__inner',
		{
			y: 80,
			opacity: 0,
			stagger: 0.2,
			duration: 0.8,
			ease: 'power2.out',
		},
		'-=0.6'
	)

	// Переворот карточек
	tl.to(
		'.card__inner',
		{
			rotateY: 180,
			duration: 1.2,
			stagger: 0.2,
			ease: 'power2.inOut',
		},
		'+=0.5'
	)

	// Замена текста
	tl.to('.integrator__title', {
		onStart: () => {
			const title = document.querySelector('.integrator__title')
			title.textContent = 'Ship Everywhere'
			title.classList.add('integrator__title--green')
		},
		opacity: 1,
		duration: 0.2,
	})
	
})
