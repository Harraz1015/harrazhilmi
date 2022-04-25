const hamburger = document.querySelector('.header .navbar .navlist .hamburger');
const mobile_menu = document.querySelector('.header .navbar .navlist ul');
const menu_item = document.querySelectorAll('.header .navbar .navlist ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('form-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

}

function validatePhone(){
    var phone = document.getElementById('form-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
    if(phone.length != 10 && phone.length != 11 ){
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/) && !phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML = 'Only digits please';
        return false;
    }
phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
return true;
}

function validateEmail(){
    var email = document.getElementById('form-email').value;

    if(email.length == 0)
    {
        emailError.innerHTML = 'Email is required'
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        emailError.innerHTML = 'Email Invalid'
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
return true;
}


function validateMessage(){
    var message = document.getElementById('form-message').value;
    var required = 30;
    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + ' more characters required';
        return false;
    }
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateForm(){
    if(!validateName() ||!validatePhone() || !validateEmail() || !validateMessage()){
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fill up the form!';
    setTimeout(function(){submitError.style.display='none';}, 3000);
    return false;
    }
}