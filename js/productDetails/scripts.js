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
    } else {
        for(var i=0; i<priceArray.length; i++) {
            priceDisplay.textContent = priceDisplay.textContent + '$' + priceArray[i] + (i+1 !== priceArray.length ? ', ' : '')
        }
        
        priceDisplay.style.color = 'black'
        contactInfo.textContent = 'Contact ' + email + ' for more details'
    }
}
// document.getElementById('size-select').addEventListener('change', function() {

//     let availableProducts = 'Loading...'
//     let price = ''
//     let contactInfo = ''
//     switch (this.value) {
//         case 'Size 8: Deadstock':
//             availableProducts = '1 left'
//             price = '$800'
//             contactInfo = 'alex.science@gmail.com'
//             break
//         case 'Size 10: 8/10 Replacement box':
//             availableProducts = '1 left'
//             price = '$550'
//             contactInfo = 'alex.science@gmail.com'
//             break
//         case 'Size 10: Deadstock':
//             availableProducts = '3 left'
//             price = '$900'
//             contactInfo = 'saihan@gmail.com'
//             break
//         case 'Size 12: 9/10':
//             availableProducts = '2 left'
//             price = '$750'
//             contactInfo = 'alexg@gmail.com'
//             break
//         case 'Size 15: Deadstock':
//             availableProducts = '1 left'
//             price = '$600'
//             contactInfo = 'alex.science@gmail.com'


//     }
//     availabilityText.textContent = this.value + ': ' + availableProducts
//     priceDisplay.textContent = price
//     contactText.textContent = 'Please contact ' + contactInfo + ' for inquiries!'

//   });