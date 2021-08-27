const eye = document.getElementById('hiddenty');
const passwordInput = document.getElementById('password');
let confirm = document.getElementById('');

eye.addEventListener('click', e => {
  e.preventDefault();
  passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password'
  passwordInput.focus();
});


var splitText = new SplitText('h1, p', {type: 'chars'});

var tl = gsap.timeline();


tl
	.from(splitText.chars, {duration: .5, opacity: 0, stagger: .125,  ease: 'power1. In'})

