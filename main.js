  function myFunction() {
    alert("Hello! Thankyou for your comments and likes");
}
const randomSee = document.getElementById("see");
const display = document.getElementById("display")
randomSee.addEventListener('click',randomPics);
let random

/* function randomPics(){

    fetch('http://localhost:3000/houses')
	.then((response )=> response.json())
	.then((data) => {
	console.log(data)

  display.innerHTML="<img src="+data[0,1.2,3,4].image+" width='350px' height='270px'/>";
  

});
}  */
  
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
const register=document.querySelector ("registration")
send.addEventListener("submit",function (e) {
  e.preventDefault();
  let name=document. getElementById("name").value
  let email=document.getElementById("email").value
  let password=document.getElementById("password").value
  let amount=document.getElementById("amount").value
   e.target.reset();
})

