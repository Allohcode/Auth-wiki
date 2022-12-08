const likeBtn = document.querySelectorAll(".fa-thumbs-up");
const download = document.querySelectorAll(".fa-cloud");
const numLikes = document.getElementById("num-likes");
let colorInterTurn = true;
let addNum = 0;
let interactColor;
let colorLike = "blue";
let msgValid = "Valid!";
let msgNotValid = "Not valid!";

const submitBtn = document.getElementById("submit");
const emailMsg = document.getElementById("email-msg");
const passMsg = document.getElementById("pass-msg");
///////////////////////////////  like bnt

likeBtn.forEach((like) => {
  like.addEventListener("click", (e) => {
    e.preventDefault();
    const clickbtn = e.target;

    if (like === clickbtn && colorInterTurn === true) {
      interactColor = like.style.color = colorLike;
      colorInterTurn = false;
      addNum++;
      numLikes.textContent = `${addNum} likes`;
      localStorage.setItem("like", likeBtn);
      localStorage.setItem("like", interactColor);
      localStorage.setItem("like", addNum);
      localStorage.setItem("like", clickbtn);
    } else {
      like.style.color = "rgb(216, 152, 156)";
      colorInterTurn = true;
      addNum--;
      numLikes.textContent = `${addNum} likes`;
    }
  });
});

///////////////// downoad
download.forEach((download) => {
  download.addEventListener("click", (e) => {
    const clickbtn = e.target;

    if (download === clickbtn && colorInterTurn === true) {
      interactColor = download.style.color = colorLike;
      alert("download now");
      colorInterTurn = false;
    } else {
      download.style.color = "rgb(216, 152, 156)";
      colorInterTurn = true;
    }
  });
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("Password").value;
  const checkbox = document.getElementById("checkbox").value;

  let emailValidation =
    /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})(.[a-z]{2,8})?$/;
  let passwordValidation = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,9}/;
  if (
    emailValidation.test(email) &&
    passwordValidation.test(password) &&
    checkbox
  ) {
    emailMsg.textContent = msgValid;
    passMsg.textContent = msgValid;
    emailMsg.style.color = "green";
    passMsg.style.color = "green";
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  } else {
    emailMsg.textContent = msgNotValid;
    passMsg.textContent = msgNotValid;
    emailMsg.style.color = "red";
    passMsg.style.color = "red";
  }
});
