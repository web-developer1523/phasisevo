;(function () {
	const initSwipers = () => {
		$('.card-list-section').each(function () {
			const $section = $(this)
			const id = $section.attr('id')
			const $box = $section.find('.card-list')

			if ($box.find('.swiper').length === 0) return

			if ($box.data('swiper-initialized')) return

			const autoplay = $box.data('autoplay')
			const stopAutoplay = $box.data('stop-autoplay')
			const delay = 4 * 1000

			let autoplayParm = {}
			if (autoplay) {
				autoplayParm = {
					autoplay: {
						delay: delay,
						pauseOnMouseEnter: stopAutoplay,
						disableOnInteraction: false,
					},
				}
			}

			const swiperParms = {
				slidesPerView: 1,
				loop: false,
				spaceBetween: 16,
				autoHeight: false,
				calculateHeight: false,
				keyboard: true,
				navigation: {
					nextEl: `#${id} .swiper-button-next`,
					prevEl: `#${id} .swiper-button-prev`,
				},
				pagination: {
					el: `#${id} .swiper-pagination`,
					clickable: true,
					type: 'bullets',
				},
				...autoplayParm,
			}

			if (window.innerWidth <= 576) {
				const swiperInstance = new Swiper(`#${id} .swiper`, swiperParms)
				$box.data('swiper-initialized', true)
				$box.data('swiper-instance', swiperInstance)
			}
		})
	}

	if (window.innerWidth > 576) {
		const slides = document.querySelectorAll('.card-list__list .swiper-slide')
		slides.forEach((slide) => {
			slide.classList.remove('swiper-slide')
		})
	}

	document.addEventListener('DOMContentLoaded', function () {
		initSwipers()

		document.addEventListener('shopify:section:load', function () {
			initSwipers()
		})
	})
})()
