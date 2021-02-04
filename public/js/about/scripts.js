function imgSlider(anything){
	document.querySelector('.metrogear').src = anything;
}

function changeColor(color){
	const circle = document.querySelector('.circle');
	circle.style.background = color;
	const title = document.querySelector('#title')
	title.style.color = color;
}

function changeText (name){
	const text = document.querySelector('#text')
	switch (name) {
		case 'main':
			text.textContent = 'Formerly know as Society Thrift, we are a group of university students from the east end of Scarborough. Together, we want to share our passion for streetwear and sneakers with you all!'
			break
		case 'shipping':
			text.textContent = 'We offer worldwide shipping and 1-day shipping on select orders! Please contact us for more information on our shipping policies and rates.'
			break
		case 'returns':
			text.textContent = 'All products are FINAL SALE. We do not accept cancellations, refunds, or exchanges unless explicitly agreed upon prior to the sale.'
			break
		case 'authenticity':
			text.textContent = 'All products sold by Society Streetwear Toronto are 100% Authentic (unless explicitly stated otherwise). All products consigned to Society Streetwear Toronto are thoroughly verified for authenticity by our experts before being advertised for sale.'
			break
		case 'payment':
			text.textContent = 'We currently accept payment in forms of cash (for local meetups only), Interac E-Transfer and PayPal.'
	}
}