(() => {
	
	console.log("fired");


 	const clickbio = document.querySelector('#click'),
 		  clickbio1 = document.querySelector('#click1'),
 		  playVideo = document.querySelector('#play'),
		  lightBox = document.querySelector('.lightbox'),
		  lightBox1 = document.querySelector('.lightbox1'),
		  lightbox3 = document.querySelector('.lightbox3'),
		  picture = document.querySelector('.pictures')
		  video = document.querySelector('video'),
		  closeLB = document.querySelector('.lightbox-close');
		  
		  var button = document.querySelector("#button");
		  var burgerCon = document.querySelector("#burgerCon");

		  let logo = document.querySelector('.logo');


	function animImage() {
		const offSet = 600;

		TweenMax.to(logo, 0.7, {scaleX: 1.025, scaleY: 1.025, rotation: 360, ease:Elastic.easeInOut});

		 picture.style.right = totalOffset;
	}



	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}


	function showLightbox() {

		hideLightbox ();

 
		lightBox.classList.add('display');
 
	}

	function showLightbox1() {

		hideLightbox ();

 
		lightBox1.classList.add('display');
 
	}

	function showLightbox3() {

		hideLightbox ();

 
		lightBox3.classList.add('display');
 
	}

 
	function hideLightbox() {

		// lightBox1.classList.remove('display');
		lightBox.classList.remove('display');
 
	}

	logo.addEventListener('mouseover', animImage);
	button.addEventListener("click", hamburgerMenu, false);
	clickbio.addEventListener('click', showLightbox);
	clickbio1.addEventListener('click', showLightbox1);
	playVideo.addEventListener('click', showLightbox3);
	video.addEventListener('ended', closeLightbox);
	closeLB.addEventListener('click', closeLightbox);
		
})();

