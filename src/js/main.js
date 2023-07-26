const mobbAudio = new Audio('../MobbDeep.mp3');
const mobbDiv = document.querySelector('.mobbdeep');
const nasAudio = new Audio('../Nas.mp3');
const nasDiv = document.querySelector('.artists__images-nas');
const currentYear = document.querySelector('footer p span');

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

handleDate();
