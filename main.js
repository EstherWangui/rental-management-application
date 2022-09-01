
const random foods

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