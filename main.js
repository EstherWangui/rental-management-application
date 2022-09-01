
const randomSee = document.getElementById("see");
const display = document.getElementById("display")
randomSee.addEventListener('click',randomPics);
let random
function randomPics(){
  fetch('https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice?address=5500%20Grand%20Lake%20Drive%2C%20San%20Antonio%2C%20TX%2C%2078244&propertyType=Single%20Family&bedrooms=4&bathrooms=2&squareFootage=1600&compCount=5')
	.then((response )=> response.json())
	.then((data) => random = data.image);
	
  display.innerHTML="<img src={data.image width=\"400px\" height=\"150px\">";
}
let flataTitle = document.getElementById("card-title");
let flataImage = document.getElementById("card-image");
let flataLikes = document.querySelector(".likes-section");
let flatalikeBtn = document.getElementById("like-count");
let flataComment = document.getElementById("comments-list");
let inputForm = document.getElementById("comment");
let likeBtn = document.getElementById("like-button");
function renderContent(data) {
  flataTitle.innerText = data.title;
  flataImage.src = data.image;
  flatalikeBtn.innerHTML = data.likes;
}
mainForm = document.getElementById("comment-form");
mainForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let newInput = document.createElement("li");
  newInput.innerText = comment.value;
  flataComment.append(newInput);
  e.target.reset();
});
let num = 0;
likeBtn.addEventListener("click", function(){
  num = num + 1;
  flatalikeBtn.innerText = num + " likes";
}); 