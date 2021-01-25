const consignmentForm = document.querySelector('#consignment-form')
const consignmentName = document.querySelector('.consignment-form-name')
const consignmentEmail = document.querySelector('.consignment-form-email')
const consignmentDetails = document.querySelector('.consignment-form-details')
const consignmentFile = document.querySelector('.consignment-form-file')
const consignmentText = document.querySelector('#consignment-form-text')
const actualBtn = document.getElementById('actual-btn');
const fileChosen = document.getElementById('file-chosen');

consignmentForm.addEventListener('submit', (e) => {
    e.preventDefault()
    consignmentText.textContent = ''
    console.log(consignmentName.value, consignmentEmail.value, consignmentDetails.value)
    document.getElementById("consignment-form").reset();
    fileChosen.textContent = 'No files chosen'
    consignmentText.textContent = 'Thank you! Your submission has been received.'
})



actualBtn.addEventListener('change', function(){

    if(this.files.length === 1) {
        fileChosen.textContent = this.files[0].name
    } else {
        fileChosen.textContent = this.files.length + ' files attached'
    }
    
})