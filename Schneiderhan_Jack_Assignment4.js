// Here are the paths to the images
const fileLocations = {
   woofer: './img/woofer.jpg',
   pupper: './img/pupper.jpg',
   clouds: './img/clouds.jpg',
   snek: './img/snek.jpg'
};

/**
 * This function will get the values of the following elements:
 * 		formUsername, formCaption, formImg
 * Then, this will pass those values to the addNewPost function.
 * @param {Event} event the submit event of the #postForm form
 */
function handleFormSubmit(event) {
   // This next line prevents the reload of the form
   event.preventDefault();
   names = document.getElementById("formUsername");
   cap = document.getElementById("formCaption");
   mag = document.getElementById("formImg");
   addNewPost(names, cap, mag);
}

/**
 * This function create the following div and append it to the #postList element
	<div class="post">
		<span>{username}</span>
		<img src="{imgLocation}" alt="{caption}">
		<div class="postOverlay">
			{caption}
		</div>
	</div>
 * 
 * Also, add a mouseover and mouseleave events to the post div element
 * @param {String} username username of the post
 * @param {String} caption caption of the post
 * @param {String} imgLocation location of the post image
 */
function addNewPost(username, caption, imgLocation) {
   imgLoc = ''
   if(imgLocation.value == 'woofer')
      imgLoc = './img/woofer.jpg';
   else if(imgLocation.value == 'pupper')
      imgLoc = './img/pupper.jpg';
   else if(imgLocation.value == 'clouds')
      imgLoc = './img/clouds.jpg';
   else if(imgLocation.value == 'snek')
      imgLoc = './img/snek.jpg';

   var newDiv = document.createElement("div");
   newDiv.className = "post";
   var newSpan = document.createElement("span");
   var newImg = document.createElement("img");
   var newOver = document.createElement("div");
   newOver.className = "postOverlay";
   var newSername = document.createTextNode(username.value);
   var newOverlay = document.createTextNode(caption.value);

   newImg.src = imgLoc;
   newSpan.appendChild(newSername);
   newDiv.appendChild(newSpan);
   newDiv.appendChild(newImg);
   newOver.appendChild(newOverlay);
   newDiv.appendChild(newOver)

   newOver.addEventListener("mouseover", function(){newOver.style.opacity = "1"});
   newOver.addEventListener("mouseleave", function(){newOver.style.opacity = "0"});

   document.getElementById("postList").appendChild(newDiv)






}

window.onload = () => {
   // Once our window is loaded, we add the event listener for our post form
   postForm.addEventListener('submit', handleFormSubmit);
};