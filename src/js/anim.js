gsap.registerPlugin(ScrollTrigger, Flip);

const records = document.querySelector('.header__txt-two p');
const headerBlock = document.querySelector('.header__txt');
const nasRelocation = document.querySelector('.artists__images-nas');
const nasImg = document.querySelectorAll('.nas-img');
const mobbImg = document.querySelector('.mobbdeep');
const mobbEvent = document.querySelector('.events__card-title');
const supportList = document.querySelector('.events__scard-list');

let resolution = gsap.matchMedia();

if (window.innerWidth > 992) {
	const lenis = new Lenis({
		// syncTouch: true,
		// smoothToch: true,
	});

	lenis.on('scroll', (e) => {
		console.log(e);
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);
}

// gsap.fromTo(
// 	records.children,
// 	{
// 		y: '+=200',
//     },
// 	{
// 		y: 0,
// 		stagger: 0.5,
// 		duration: 3,
// 		ease: 'easeInOut',
// 		scrollTrigger: {
// 			trigger: records,
// 			start: 'top 46%',
// 			end: 'top 30%', //gdzie ma sie skonczyc
// 			scrub: true, //scroll dziala w obie strony
// 		},
// 	}
// );
gsap.fromTo(
	records.children,
	{
		y: '+=200',
	},
	{
		y: 0,
		delay: 2.2,
		stagger: 0.3,
		duration: 0.7,
		ease: 'easeInOut',
		scrollTrigger: {
			trigger: records,
		},
	}
);

resolution.add('(min-width: 768px)', () => {
	gsap.fromTo(
		headerBlock,
		{
			scale: 1,
			opacity: 1,
		},
		{
			scale: 3,
			opacity: 0,
			duration: 2.5,
			ease: 'easeInOut',
			scrollTrigger: {
				trigger: headerBlock,
				start: 'top: 20%',
				end: 'bottom: -30%',
				scrub: true,
			},
		}
	);
	gsap.fromTo(
		nasImg,
		{
			scale: 1.2,
			y: '-=900px',
			x: '+=400px',
		},
		{
			y: 0,
			x: 0,
			scale: 1,
			duration: 2.5,
			ease: 'easeInOut',
			scrollTrigger: {
				trigger: nasImg,
				start: 'top: 40%',
				end: 'bottom: -10%',
				scrub: true,
			},
		}
	);
	gsap.fromTo(
		mobbEvent,
		{
			scale: 4,
			opacity: 0,
		},
		{
			scale: 1,
			opacity: 1,
			duration: 2.5,
			ease: 'easeInOut',
			scrollTrigger: {
				trigger: mobbEvent,
				start: 'top: 70%',
				end: 'top: 30%',
				scrub: true,
			},
		}
	);
	gsap.fromTo(
		supportList.children,
		{
			y: 0,
		},
		{
			y: '-=200px',
			stagger: 0.3,
			duration: 1,
			ease: 'easeInOut',
			scrollTrigger: {
				trigger: supportList,
				start: 'top: 60%',
				end: 'top: 0%',
				scrub: true,
			},
		}
	);
});

resolution.add('(min-width: 1000px)', () => {
	gsap.fromTo(
		mobbImg,
		{
			scale: 1,
			y: 0,
			x: 0,
		},
		{
			y: '+=1600px',
			x: '-=740px',
			scale: 1.4,
			duration: 2.5,
			ease: 'easeInOut',
			scrollTrigger: {
				trigger: mobbImg,
				start: 'top: 40%',
				end: 'bottom: -50%',
				scrub: true,
			},
		}
	);
});
