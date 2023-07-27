const mobbAudio = new Audio('../MobbDeep.mp3');
const mobbDiv = document.querySelector('.mobbdeep');
const nasAudio = new Audio('../Nas.mp3');
const nasDiv = document.querySelector('.artists__images-nas');
const currentYear = document.querySelector('footer p span');
const menuBtn = document.querySelector('.nav__burger');
const nav = document.querySelector('.nav__list');
const allLinks = document.querySelectorAll('.nav__list-item a');
const homeLink = document.querySelector('.home-link');
const artistsLink = document.querySelector('.artists-link');
const eventLink = document.querySelector('.events-link');
const studioLink = document.querySelector('.studio-link');

mobbDiv.addEventListener('mouseenter', () => {
	mobbAudio.play();
});
mobbDiv.addEventListener('mouseleave', () => {
	mobbAudio.pause();
	mobbAudio.currentTime = 0;
});
nasDiv.addEventListener('mouseenter', () => {
	nasAudio.play();
});
nasDiv.addEventListener('mouseleave', () => {
	nasAudio.pause();
	nasAudio.currentTime = 0;
});

const handleDate = () => {
	const date = new Date().getFullYear();
	currentYear.textContent = date;
};

const handleNavOpen = () => {
	nav.classList.toggle('nav_open');
	homeLink.classList.toggle('home_open');
	artistsLink.classList.toggle('artists_open');
	eventLink.classList.toggle('event_open');
	studioLink.classList.toggle('studio_open');
};

handleDate();
menuBtn.addEventListener('click', handleNavOpen);
allLinks.forEach((link) => link.addEventListener('click', handleNavOpen));
