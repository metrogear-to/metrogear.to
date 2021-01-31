// const availabilityText = document.querySelector('#availability')
// const selectedSize = document.querySelector('#size-selector')
// const priceDisplay = document.querySelector('#price')
// const contactText = document.querySelector('#contact-info')

const displayImg = document.querySelector('#display-pic')
const imgOne = document.querySelector('#list-img-1')
const imgTwo = document.querySelector('#list-img-2')
const imgThree = document.querySelector('#list-img-3')

const priceDisplay = document.querySelector('#header-price')
const contactInfo = document.querySelector('#contact-info')
const emailButton = document.querySelector('#add-to-cart')
const emailCreater = document.querySelector('#contact-email')

document.getElementById('list-img-1').addEventListener('click', () => {
    document.getElementById('display-pic').src = '../img/productDetails/bredtoe.png'
    document.getElementById('list-img-1').style.border = '3px solid rgb(111, 28, 238)'
    document.getElementById('list-img-2').style.border = '3px solid rgb(241, 238, 238)'
    document.getElementById('list-img-3').style.border = '3px solid rgb(241, 238, 238)'
})

document.getElementById('list-img-2').addEventListener('click', () => {
    document.getElementById('display-pic').src = '../img/productDetails/behind.jpg'
    document.getElementById('list-img-1').style.border = '3px solid rgb(241, 238, 238)'
    document.getElementById('list-img-2').style.border = '3px solid rgb(111, 28, 238)'
    document.getElementById('list-img-3').style.border = '3px solid rgb(241, 238, 238)'
})

document.getElementById('list-img-3').addEventListener('click', () => {
    document.getElementById('display-pic').src = '../img/productDetails/side.jpg'
    document.getElementById('list-img-1').style.border = '3px solid rgb(241, 238, 238)'
    document.getElementById('list-img-2').style.border = '3px solid rgb(241, 238, 238)'
    document.getElementById('list-img-3').style.border = '3px solid rgb(111, 28, 238)'
})

const showPrice = (priceArray, email, size) => {
    document.getElementById('size-element-7').style.border = '2px solid #333'
    document.getElementById('size-element-7.5').style.border = '2px solid #333'
    document.getElementById('size-element-8').style.border = '2px solid #333'
    document.getElementById('size-element-8.5').style.border = '2px solid #333'
    document.getElementById('size-element-9').style.border = '2px solid #333'
    document.getElementById('size-element-9.5').style.border = '2px solid #333'
    document.getElementById('size-element-10').style.border = '2px solid #333'
    document.getElementById('size-element-10.5').style.border = '2px solid #333'
    document.getElementById('size-element-11').style.border = '2px solid rgb(100, 100, 100)'
    document.getElementById('size-element-11.5').style.border = '2px solid rgb(100, 100, 100)'
    document.getElementById('size-element-12').style.border = '2px solid #333'
    document.getElementById('size-element-13').style.border = '2px solid #333'
    document.getElementById('size-element-' + size).style.border = '2px solid rgb(111, 28, 238)'
    priceDisplay.textContent = ''
    if(priceArray.length === 0) {
        priceDisplay.textContent = 'Out of Stock'
        priceDisplay.style.color = 'red'
        contactInfo.textContent = ''
        emailButton.textContent = 'Out of Stock'
        emailCreater.href = ''
    } else {
        for(var i=0; i<priceArray.length; i++) {
            priceDisplay.textContent = priceDisplay.textContent + '$' + priceArray[i] + ' CAD' + (i+1 !== priceArray.length ? ', ' : '')
        }
        priceDisplay.style.color = 'black'
        contactInfo.textContent = 'Contact ' + email + ' for more details'
        emailButton.textContent = 'Email ' + email
        emailCreater.href = 'mailto:' + email + '?Subject=Jordan%201%20Bred%20Toe%20Size%20' + size
    }
}

const checkSize = () => {
    if(priceDisplay.textContent[0] === 'F') {
        alert('Please choose a size!')
    }
    else if(priceDisplay.textContent === 'Out of Stock') {
        alert('Product is currently out of stock. Check back soon!')
    }
}