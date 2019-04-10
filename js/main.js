(() => {
	
	console.log("fired");


 	const clickbio = document.querySelector('#click');
 		  clickbio1 = document.querySelector('#click1');
		  lightBox = document.querySelector('.lightbox');
		  lightBox1 = document.querySelector('.lightbox1')
		  
		  var button = document.querySelector("#button");
		  var burgerCon = document.querySelector("#burgerCon");

		  let logo = document.querySelector('.logo');


	function animImage() {
		TweenMax.to(logo, 0.7, {scaleX: 1.025, scaleY: 1.025, rotation: 360, ease:Elastic.easeInOut});
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

 
	function hideLightbox() {

		// lightBox1.classList.remove('display');
		lightBox.classList.remove('display');
 
	}

	logo.addEventListener('mouseover', animImage);
	button.addEventListener("click", hamburgerMenu, false);
	clickbio.addEventListener('click', showLightbox);
	clickbio1.addEventListener('click', showLightbox1);
		
})();

