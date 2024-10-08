const handleGetFontSize = () => {
	const container = document.querySelector('.container'),
		height = container.clientHeight,
		total = height / 28

	return `${total}px`
}

const handleGetFontSizeInput = () => {
	const container = document.querySelector('.container'),
		height = container.clientHeight,
		total = height / 30

	return `${total}px`
}

const handleAddPinkiesFilter = () => {
	const response = JSON.parse(localStorage.getItem('response'))

	if (response.includes(1)) {
		$('.rosadas').show()
	}

	if (response.includes(2)) {
		$('.rosadas1').show()
	}

	if (response.includes(3)) {
		$('.rosadas2').show()
	}

	if (response.includes(4)) {
		$('.rosadas3').show()
	}
}

const handleValidateResponses = () => {
	const open1 = localStorage.getItem('open1'),
		open2 = localStorage.getItem('open2'),
		open3 = localStorage.getItem('open3'),
		open4 = localStorage.getItem('open4')

	if (
		open1 === 'true' &&
		open2 === 'true' &&
		open3 === 'true' &&
		open4 === 'true'
	) {
		setTimeout(() => {
			window.location.href = './index342.html '
		}, 2000)
	}
}

$(document).ready(function () {
	handleAddPinkiesFilter()

	$('#quantity-number').css('font-size', handleGetFontSize())

	$(window).on('resize', () => {
		$('#quantity-number').css('font-size', handleGetFontSize())
	})

	$('#quantity-number').text(
		JSON.parse(localStorage.getItem('response')).length
	)

	// modal
	$('.openModal').on('click', () => {
		if (localStorage.getItem('open1') !== 'true') {
			localStorage.setItem('open1', 'true')
			$('.modal').css('display', 'block')
			$('#input-response-1').css('font-size', handleGetFontSizeInput())
			$(window).on('resize', () => {
				$('#input-response-1').css(
					'font-size',
					handleGetFontSizeInput()
				)
			})
			$('.openModal').hide()
			$('.openModal1').hide()
			$('.openModal2').hide()
			$('.openModal3').hide()
			sonidobuttom()
		}
	})
	// cerra modal
	$('.closeModal').on('click', () => {
		$('.modal').css('display', 'none')
		$('.reproduc').trigger('pause')
		$('.reproduc').hide()
	})

	$('#next-button-1').on('click', () => {
		const responseValue = $('#input-response-1').val()

		if (responseValue === '21') {
			sonidoexitoso()
			$('.per-1').hide()
			$('.per-2').show()
			$('#input-response-1').hide()
			$('#next-button-1').hide()
			const response = JSON.parse(localStorage.getItem('response'))
			localStorage.setItem('response', JSON.stringify([...response, 1]))
		} else {
			sonidoerroneo()
			$('#error-1').show()
			$('.modal').hide()
		}
	})

	$('#next-person-1').on('click', () => {
		$('.modal').hide()
		$('.rosadas').show()
		$('#quantity-number').text(
			JSON.parse(localStorage.getItem('response')).length
		)
		handleValidateResponses()
		setTimeout(() => {
			$('.openModal').show()
			$('.openModal1').show()
			$('.openModal2').show()
			$('.openModal3').css('display', 'block')
		}, 1000)
	})

	$('.closeModalerror1').on('click', () => {
		$('#error-1').hide()
		handleValidateResponses()
		$('.openModal').show()
		$('.openModal1').show()
		$('.openModal2').show()
		$('.openModal3').show()
	})

	// modal1
	$('.openModal1').on('click', () => {
		if (localStorage.getItem('open2') !== 'true') {
			localStorage.setItem('open2', 'true')
			$('.modal1').css('display', 'block')
			$('#input-response-2').css('font-size', handleGetFontSizeInput())
			$(window).on('resize', () => {
				$('#input-response-2').css(
					'font-size',
					handleGetFontSizeInput()
				)
			})
			sonidobuttom()
			$('.openModal').hide()
			$('.openModal1').hide()
			$('.openModal2').hide()
			$('.openModal3').hide()
		}
	})

	$('#next-button-2').on('click', () => {
		const responseValue = $('#input-response-2').val()

		if (responseValue === '19') {
			sonidoexitoso()
			$('.per-3').hide()
			$('.per-4').show()
			$('#input-response-2').hide()
			$('#next-button-2').hide()
			const response = JSON.parse(localStorage.getItem('response'))
			localStorage.setItem('response', JSON.stringify([...response, 2]))
		} else {
			sonidoerroneo()
			$('#error-1').show()
			$('.modal1').hide()
		}
	})

	$('#next-person-2').on('click', () => {
		$('.modal1').hide()
		$('.rosadas1').show()
		$('#quantity-number').text(
			JSON.parse(localStorage.getItem('response')).length
		)
		handleValidateResponses()
		setTimeout(() => {
			$('.openModal').show()
			$('.openModal1').show()
			$('.openModal2').show()
			$('.openModal3').css('display', 'block')
		}, 1000)
	})

	// modal2
	$('.openModal2').on('click', () => {
		if (localStorage.getItem('open3') !== 'true') {
			localStorage.setItem('open3', 'true')
			$('.modal2').css('display', 'block')
			$('#input-response-3').css('font-size', handleGetFontSizeInput())
			$(window).on('resize', () => {
				$('#input-response-3').css(
					'font-size',
					handleGetFontSizeInput()
				)
			})
			sonidobuttom()

			$('.openModal').hide()
			$('.openModal1').hide()
			$('.openModal2').hide()
			$('.openModal3').hide()
		}
	})

	$('#next-button-3').on('click', () => {
		const responseValue = $('#input-response-3').val()

		if (responseValue === '4' || responseValue === '04') {
			sonidoexitoso()
			$('.per-5').hide()
			$('.per-6').show()
			$('#input-response-3').hide()
			$('#next-button-3').hide()
			const response = JSON.parse(localStorage.getItem('response'))
			localStorage.setItem('response', JSON.stringify([...response, 3]))
		} else {
			sonidoerroneo()
			$('#error-1').show()
			$('.modal2').hide()
		}
	})

	$('#next-person-3').on('click', () => {
		$('.modal2').hide()
		$('.rosadas2').show()
		$('#quantity-number').text(
			JSON.parse(localStorage.getItem('response')).length
		)
		handleValidateResponses()
		setTimeout(() => {
			$('.openModal').show()
			$('.openModal1').show()
			$('.openModal2').show()
			$('.openModal3').css('display', 'block')
		}, 1000)
	})

	// modal3
	$('.openModal3').on('click', () => {
		if (localStorage.getItem('open4') !== 'true') {
			localStorage.setItem('open4', 'true')
			$('.modal3').css('display', 'block')
			$('#input-response-4').css('font-size', handleGetFontSizeInput())
			$(window).on('resize', () => {
				$('#input-response-4').css(
					'font-size',
					handleGetFontSizeInput()
				)
			})
			sonidobuttom()
			$('.openModal').hide()
			$('.openModal1').hide()
			$('.openModal2').hide()
			$('.openModal3').hide()
		}
	})

	$('#next-button-4').on('click', () => {
		const responseValue = $('#input-response-4').val()

		if (responseValue === '44') {
			sonidoexitoso()
			$('.per-7').hide()
			$('.per-8').show()
			$('#input-response-4').hide()
			$('#next-button-4').hide()
			const response = JSON.parse(localStorage.getItem('response'))
			localStorage.setItem('response', JSON.stringify([...response, 4]))
		} else {
			sonidoerroneo()
			$('#error-1').show()
			$('.modal3').hide()
		}
	})

	$('#next-person-4').on('click', () => {
		$('.modal3').hide()
		$('.rosadas3').show()
		$('#quantity-number').text(
			JSON.parse(localStorage.getItem('response')).length
		)
		handleValidateResponses()
		setTimeout(() => {
			$('.openModal').show()
			$('.openModal1').show()
			$('.openModal2').show()
			$('.openModal3').css('display', 'block')
		}, 1000)
	})
})
