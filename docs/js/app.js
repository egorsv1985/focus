document.addEventListener('DOMContentLoaded', function () {
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

	// Проверка форматов
	function supportsWebP() {
		var elem = document.createElement('canvas')
		return (
			!!(elem.getContext && elem.getContext('2d')) &&
			elem.toDataURL('image/webp').indexOf('data:image/webp') == 0
		)
	}

	function supportsAvif() {
		var elem = document.createElement('canvas')
		return (
			!!(elem.getContext && elem.getContext('2d')) &&
			elem.toDataURL('image/avif').indexOf('data:image/avif') == 0
		)
	}

	if (supportsWebP()) document.body.classList.add('webp')
	if (supportsAvif()) document.body.classList.add('avif')

	const cases = document.querySelectorAll('[data-case]')
	const hasHoverSupport = window.matchMedia(
		'(hover: hover) and (pointer: fine)'
	).matches

	if (hasHoverSupport) {
		// ✅ Десктоп: ховеры + GSAP
		cases.forEach(el => {
			el.addEventListener('mouseenter', () => {
				cases.forEach(c => c.classList.remove('case--active'))
				el.classList.add('case--active')
			})
		})

		// ✅ GSAP только на десктопах
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

		tl.to(
			'.card__inner',
			{
				rotateY: 180,
				duration: 1,
				ease: 'power2.inOut',
			},
			0.8
		)

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
	} else {
		// ✅ Мобилки: все кейсы сразу раскрыты, без анимаций
		cases.forEach(el => el.classList.add('case--active'))
	}
})
