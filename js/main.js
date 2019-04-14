(() => {
	
	console.log("fired");


 	const clickbio = document.querySelector('#click'),
 		  clickbio1 = document.querySelector('#click1'),
 		  playVideo = document.querySelector('#play'),
		  lightBox = document.querySelector('.lightbox'),
		  lightBox1 = document.querySelector('.lightbox1'),
		  picture = document.querySelector('.pictures')
		  video = document.querySelector('video'),
		  closeLB = document.querySelector('.lightbox-close');
		  
		  var button = document.querySelector("#button");
		  var burgerCon = document.querySelector("#burgerCon");

		  let logo = document.querySelector('.logo');

		  let lightboxControls = document.querySelectorAll('.open-lightbox');


	function animImage() {
		const offSet = 600;

		TweenMax.to(logo, 0.7, {scaleX: 1.025, scaleY: 1.025, rotation: 360, ease:Elastic.easeInOut});

		 picture.style.right = totalOffset;
	}



	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}


	function showLightbox(e) {
		e.preventDefault();

		hideLightbox ();
		this.nextElementSibling.classList.add('display');

	}

	function hideLightbox() {
		document.querySelectorAll('.lightbox').forEach(lightbox => lightbox.classList.remove('display'));
 
	}

	logo.addEventListener('mouseover', animImage);
	button.addEventListener("click", hamburgerMenu, false);
	// video.addEventListener('ended', closeLightbox);
	// closeLB.addEventListener('click', closeLightbox);

	if (lightboxControls) {
		lightboxControls.forEach(button => button.addEventListener("click", showLightbox));
	}
		
})();

