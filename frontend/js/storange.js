const liked_element = document.getElementById("lblLikeCount");

let like = 0;

if (localStorage.getItem("like")) {
  like = localStorage.getItem("like");
  liked_element.innerHTML = like;
} else {
  localStorage.setItem("like", 0);
}

const likeButton = document.getElementById("increase-like");

likeButton.onclick = () => {
  like++;
  localStorage.setItem("like", like);
  liked_element.innerHTML = like;
};

const cookieButton = document.getElementById("accept-cookies");

if (localStorage.getItem("cookie")) {
  let cookie = localStorage.getItem("cookie");
  if (cookie != 1) {
    console.log(false);
    $("#myModal").modal("show");
  }
} else {
  localStorage.setItem("cookie", 0);
  $("#myModal").modal("show");
}

cookieButton.onclick = () => {
  localStorage.setItem("cookie", 1);
  console.log("cookielendik");
};
